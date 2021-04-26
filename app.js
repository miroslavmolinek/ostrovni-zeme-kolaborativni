const express = require('express');
const path = require('path')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/deti.html');
});
app.get('/vedouci', (req, res) => {
    res.sendFile(__dirname + '/public/vedouci.html');
});

// app variables

var groupName = ""
var groupLeaderId = ""
var onlineUsers = []
var sectionNumberGlobal = 2
var questionNumberGlobal = 1
var results = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]

io.on('connection', (socket) => {
    //socket.broadcast.emit('connected user', {userId : socket.id, text: ""});
    console.log('connected user "' + socket.id + '"');
    addUser(socket.id)
    showUsers()
    
    socket.on('prihlasit dite', (msg) => {
        console.log('prihlasit dite request: ' + msg);
        if(!groupName) {
            // zadna skupina jeste neexistuje, vyckejte na vedouciho
            sendErrorBack('Přihlášení selhalo - není aktivní žádná skupina');
            sendInfoBack('Informuj o chybě lektora')
        } else {
            if(groupName == msg.group) {
                // uspech, preposilam na prihlaseni
                // io.emit('prihlasit dite', msg);
                changeUserToConnected(socket.id, msg)
                showUsers()
                sendServerState()
            } else {
                // skupina se nazyva jinak, kontaktujte vedouciho
                sendErrorBack('Přihlášení selhalo - špatný název skupiny');
                sendInfoBack('Informuj o chybě lektora')
                sendInfoToLeader('Neúspěšný pokus o přihlášení od uživatele "' + msg.name + '" do skupiny "' + msg.group + '"')
                console.log('aktualni nazev skupiny: ' + groupName);
            }
        }
    });

    socket.on('zprava vedouciho', (msg) => {
        //io.emit('zprava vedouciho', msg);
        // zmenit v online users na vedouciho
        changeUserToLeader(socket.id)
        showUsers()
        sendServerState()
    });

    socket.on('nova sekce', (msg) => {
        sectionNumberGlobal = msg
        console.log('nova sekce: ' + sectionNumberGlobal);
        sendInfoToLeader('Sekce změněna na "' + sectionNumberGlobal + '"')
        sendServerState()
    });

    socket.on('nova otazka', (msg) => {
        questionNumberGlobal = msg
        console.log('nova otazka: ' + questionNumberGlobal);
        sendInfoToLeader('Otázka změněna na "' + questionNumberGlobal + '"')
        sendServerState()
    });

    socket.on('new group', (msg) => {
        console.log('new group request: ' + msg + ' by ' + socket.id);
        if(!groupName) {
            // group not set yet
            groupName = msg
            groupLeaderId = socket.id
            sendSuccessBack('Skupina vytvořena');
            sendServerState() 
        } else {
            if(groupLeaderId == socket.id) {
                // group already set by you
                groupName = msg
                sendInfoBack('Skupina aktualizována');
                sendServerState() 
            } else {
                // group set by somebody else
                sendErrorBack('Skupina je již vytvořena někým jiným');
                sendServerState() 
            }
        }
    });

    socket.on('close group', () => {
        console.log('close group by ' + socket.id);
        if(!groupName) {
            // group not set yet
            sendErrorBack('Skupina nelze zavřít, protože žádná ještě neexistuje');
        } else {
            if(groupLeaderId == socket.id) {
                // group already set by you
                groupName = ""
                sendSuccessBack('Skupina zavřena');
            } else {
                // group set by somebody else
                sendErrorBack('Skupina je vytvořena někým jiným');
            }
        }
    });

    socket.on('pridat hlas', (msg) => {
        // msg.questionNumber
        // msg.option
        
        onlineUsers.forEach(user => {
            if(user.id == socket.id) {
                user.answerForQuestionIndex[msg.questionNumber-1] = msg.option
                //sendSuccessBack('Zahlasováno ' +msg.questionNumber +msg.option)
            }
        })

        results[msg.questionNumber-1][msg.option-1]++

        sendServerState()
    });

    socket.on('odebrat hlas', (msg) => {
        // msg.questionNumber
        let option
        
        onlineUsers.forEach(user => {
            if(user.id == socket.id) {
                option = user.answerForQuestionIndex[msg.questionNumber-1]
                user.answerForQuestionIndex.splice(msg.questionNumber-1,1)
            }
        })

        option ? results[msg.questionNumber-1][option-1]-- : false

        sendServerState()
    });
    
    socket.on('disconnect', () => {
        disconnectUser(socket.id)
        sendServerState()
    });

    function sendErrorBack(text) {
        sendError(socket.id, text)
    }
    function sendSuccessBack(text) {
        sendSuccess(socket.id, text)
    }
    function sendInfoBack(text) {
        sendInfo(socket.id, text)
    }
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});

function sendError(to, text) {
    console.log('ERROR: ' + text + ' => ' + to)
    io.to(to).emit('error', text);
}

function sendSuccess(to, text) {
    console.log('SUCCESS: ' + text + ' => ' + to)
    io.to(to).emit('success', text);
}

function sendInfo(to, text) {
    console.log('INFO: ' + text + ' => ' + to)
    io.to(to).emit('info', text);
}

function sendErrorToLeader(text) {
    var sent = false
    onlineUsers.forEach(user => {
        if(user.status == 'leader') {
            sendError(user.id, text)
            sent = true
        }
    })
    if(!sent) {
        onlineUsers.forEach(user => {
            if(true) {
                sendInfo(user.id, "Vyčkejte na připojení vedoucího")
            }
        })
    }
}
function sendInfoToLeader(text) {
    var sent = false
    onlineUsers.forEach(user => {
        if(user.status == 'leader') {
            sendInfo(user.id, text)
            sent = true
        }
    })
    if(!sent) {
        onlineUsers.forEach(user => {
            if(true) {
                sendInfo(user.id, "Vyčkejte na připojení vedoucího")
            }
        })
    }
}
function sendSuccessToLeader(text) {
    var sent = false
    onlineUsers.forEach(user => {
        if(user.status == 'leader') {
            sendSuccess(user.id, text)
            sent = true
        }
    })
    if(!sent) {
        onlineUsers.forEach(user => {
            if(true) {
                sendInfo(user.id, "Vyčkejte na připojení vedoucího")
            }
        })
    }
}

function showUsers() {
    console.log(' ')
    console.log('***********************************')
    console.log('----------- USER LIST -------------')
    onlineUsers.forEach(user => {
        console.log(user.id + ' - ' + user.status)
    })
    console.log('***********************************')
    console.log(' ')
}

function addUser(userId) {
    user = {id : userId, status : "unknown"}
    onlineUsers.push(user)
}

function changeUserToLeader(userId) {
    onlineUsers.forEach(user => {
        if(user.id == userId) {
            user.status = "leader"
            //sendSuccess(userId, 'Zapsan jako leader na serveru')
        }
    })
}

function changeUserToConnected(id, msg) {
    let sent
    onlineUsers.forEach(user => {
        if(user.id == id) {
            user.status = "connected"
            user.name = msg.name
            user.gender = msg.gender
            user.group = msg.group
            user.answerForQuestionIndex = []
            user.persona = choosePersona(msg.gender)
            sendSuccess(id, 'Úspěšné přihlášení')
            sendSuccessToLeader('Úspěšné přihlášení dítěte: ' + msg.name)
            sent = true
        }
    })
    sent ? true : sendError(msg.userId, "Chyba příhlášení - uživatel nenalezen")
}

function sendServerState() {
    onlineUsers.forEach(user => {
        if(user.status == "leader" || user.status == "connected") {
            io.to(user.id).emit('state of server', {groupName : groupName, groupLeaderId : groupLeaderId, onlineUsers : onlineUsers, sectionNumberGlobal : sectionNumberGlobal, questionNumberGlobal : questionNumberGlobal, results : results})
        }
    })
}

function disconnectUser(id) {
    onlineUsers.forEach(user => {
        if(user.id == id) {
            user.status = "disconnected"
            user.name ? sendErrorToLeader('Odpojil se uživatel: ' + user.name ) : false
        }
    })
}

lastMan = 3
lastWoman = 4
function choosePersona(gender) {
    if(gender == "man") {
        if(lastMan == 1) {
            lastMan = 3 
            return 3
        } else {
            lastMan = 1
            return 1
        }
    }
    if(gender == "woman") {
        if(lastWoman == 2) {
            lastWoman = 4 
            return 4
        } else {
            lastWoman = 2
            return 2
        }
    }
}
