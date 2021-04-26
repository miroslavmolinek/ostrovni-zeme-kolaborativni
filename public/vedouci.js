// REQUIRE LIBRARIES


// KONSTANTY

const buttonGroupStart = document.getElementById('button-group-start')
const buttonGroupClose = document.getElementById('button-group-close')
const inputGroupName = document.getElementById('input-group-name')

const sectionContent = document.getElementById('section-content')

const userCounter = document.getElementById('user-counter')
const userList = document.getElementById('user-list')
const sectionButtonPrevious = document.getElementById('section-button-previous')
const sectionButtonForward = document.getElementById('section-button-forward')
const sectionSelection = document.getElementById('section-selection')
const questionButtonForward = document.getElementById('question-button-forward')
const questionButtonPrevious = document.getElementById('question-button-previous')
const questionSelection = document.getElementById('question-selection')
const questionBody = document.getElementById('question-body')
const questionOptions = document.getElementById('question-options')
const results = document.getElementById('results')


// PROMENNE
let groupName 
var currentSection = 2
var currentQuestion = 1
var onlineUsers = [
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'woman'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'disconnected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'woman'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'woman'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'woman'},
    {id : '123456789', name : 'Krtek', status : 'disconnected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'disconnected', gender : 'woman'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'woman'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'woman'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'woman'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'man'},
    {id : '123456789', name : 'Krtek', status : 'connected', gender : 'woman'}
]


// FUNKCE
function startGroup(name) {
    prepareGroup()
    socket.emit('new group', groupName);
}

function prepareGroup(name) {

    if(typeof name == "string") { 
        groupName = name
        inputGroupName.value = name
        buttonGroupStart.classList.add('hide')
        buttonGroupClose.classList.remove('hide')
        sectionContent.classList.remove('hide')
        inputGroupName.setAttribute("disabled", "true")
        console.log('Updatovana skupina ' + groupName)
    } else { 
        groupName = inputGroupName.value
        buttonGroupStart.classList.toggle('hide')
        buttonGroupClose.classList.toggle('hide')
        sectionContent.classList.toggle('hide')
        inputGroupName.setAttribute("disabled", "true")
        console.log('Vytvorena skupina ' + groupName)
    }
    updateUserList()
}

function closeGroup(params) {
    buttonGroupStart.classList.toggle('hide')
    buttonGroupClose.classList.toggle('hide')
    inputGroupName.removeAttribute("disabled")
    inputGroupName.focus()
    groupName = ""
    console.log('Skupina ukoncena')
    onlineUsers = []
    updateUserList()
    socket.emit('close group', "");
}

function sendSectionByNumber(sectionNumber) {
    setSectionByNumber(sectionNumber)
    socket.emit('nova sekce', currentSection);
}

function setSectionByNumber(sectionNumber) {
    currentSection = sectionNumber
    sectionSelection.selectedIndex = sectionNumber-2
    console.log('Sekce zmenena na ' + currentSection)
}

function sectionUpdate() {
    currentSection = sectionSelection.selectedIndex + 2
    sendSectionByNumber(currentSection)
}

function sectionForward() {
    if(sectionSelection.selectedIndex < sectionSelection.options.length-1) {
        sectionSelection.selectedIndex++
        sectionUpdate() 
    }
}

function sectionPrevious() {
    if(sectionSelection.selectedIndex > 0) {
        sectionSelection.selectedIndex--
        sectionUpdate() 
    }
}

function sendQuestionByNumber(questionNumber) {
    setQuestionByNumber(questionNumber)
    socket.emit('nova otazka', currentQuestion);
}

function setQuestionByNumber(questionNumber) {
    currentQuestion = questionNumber
    questionSelection.selectedIndex = questionNumber-1
    questionBody.innerHTML = questions[currentQuestion-1].questionText
    questionOptions.innerHTML = ""
    questions[currentQuestion-1].questionOptions.forEach(option => {
        const elem = document.createElement('p')
        elem.innerText = option.optionText
        questionOptions.appendChild(elem)
        questionOptions.appendChild(document.createElement('hr'))
    })
    //console.log('Otazka zmenena na ' + currentQuestion)
}

function questionUpdate() {
    currentQuestion = questionSelection.selectedIndex + 1
    sendQuestionByNumber(currentQuestion)
}

function questionForward() {
    if(questionSelection.selectedIndex < questionSelection.options.length-1) {
        questionSelection.selectedIndex++
        questionUpdate() 
    }
}

function questionPrevious() {
    if(questionSelection.selectedIndex > 0) {
        questionSelection.selectedIndex--
        questionUpdate() 
    }
}

function updateUserList() {
    if(!groupName) {
        userCounter.innerHTML = "NA"
        userList.innerHTML = "Zacni vytvorenim skupiny"
    } else {
        userCounter.innerHTML = onlineUsers.length

        userList.innerHTML = ""
        onlineUsers.forEach(user => {
            const elem = document.createElement('li')
            elem.innerText = user.name
            elem.dataset.userId = user.id
            elem.dataset.userStatus = user.status
            elem.dataset.userGender = user.gender
            userList.appendChild(elem)
        })
    }
}

function updateResults(res) {
    // console.log(results)
    results.innerHTML = ""
    res.forEach(function callback(item, index) {
        total = item[0] + item[1] + item[2]
        maximum = Math.max(...item)
        const nadpis = document.createElement('h3')
        const opt1 = document.createElement('p')
        const opt2 = document.createElement('p')
        const opt3 = document.createElement('p')
        nadpis.innerText = "Otázka " + (index+1)
        opt1.innerText = "A: " + item[0] + " z " + total + " hlasů (" + ((item[0]/total)*100) + "%)"
        opt2.innerText = "B: " + item[1] + " z " + total + " hlasů (" + ((item[1]/total)*100) + "%)"
        opt3.innerText = "C: " + item[2] + " z " + total + " hlasů (" + ((item[2]/total)*100) + "%)"
        
        item[0] == maximum ? opt1.dataset.max = "max" : false
        item[1] == maximum ? opt2.dataset.max = "max" : false
        item[2] == maximum ? opt3.dataset.max = "max" : false

        results.appendChild(nadpis)
        results.appendChild(opt1)
        results.appendChild(opt2)
        results.appendChild(opt3)        
    })
}




// EVENT LISTENERS

window.onload = function() {
    onlineUsers = []
    updateUserList()
    //startGroup('slunicko')
    //sectionUpdate()
    //questionUpdate()
    socket.emit('zprava vedouciho', {userId : socket.id, msg: "pripojil se vedouci"});
};

sectionButtonForward.addEventListener('click',sectionForward)
sectionButtonPrevious.addEventListener('click',sectionPrevious)
sectionSelection.addEventListener('change', sectionUpdate)

questionButtonForward.addEventListener('click',questionForward)
questionButtonPrevious.addEventListener('click',questionPrevious)
questionSelection.addEventListener('change', questionUpdate)

buttonGroupStart.addEventListener('click', startGroup)
buttonGroupClose.addEventListener('click', closeGroup)


// SOCKET LISTENERS


socket.on('zprava vedouciho', function(msg) {
    console.log("zprava vedouciho: " + msg)
});

socket.on('prihlasit dite', function(msg) {
    if(groupName == msg.group) {
        console.log("prihlasit dite: " + msg)
        dite = {id : msg.userId, name : msg.name, status : 'connected', gender : msg.gender}
        onlineUsers.push(dite)
        console.log(onlineUsers)
        updateUserList()
        socket.emit('nova sekce', currentSection);
        socket.emit('nova otazka', currentQuestion);
    }else {
        console.log("Spatna skupina pro prihlaseni ditete: " + msg)
    }
});

socket.on('user disconnected', function(msg) {
    onlineUsers.forEach(user => {
        if(msg == user.id)
        user.status = "disconnected"
    })
    updateUserList()
})

var server = {}
socket.on('state of server', function(msg) {
    server = {
        groupName : msg.groupName, 
        groupLeaderId : msg.groupLeaderId, 
        onlineUsers : msg.onlineUsers, 
        sectionNumberGlobal : msg.sectionNumberGlobal, 
        questionNumberGlobal : msg.questionNumberGlobal,
        results : msg.results
    }
    if(server.groupName) {
        // join group created by another leader
        prepareGroup(server.groupName)

        // updet user list in sync with the server group
        onlineUsers = []
        server.onlineUsers.forEach(user => {
            if(user.group == server.groupName && user.status == "connected") {
                onlineUsers.push(user)
            }
        })
        updateUserList()

        updateResults(server.results)

        server.sectionNumberGlobal != currentSection ? setSectionByNumber(server.sectionNumberGlobal) : false

        server.questionNumberGlobal != currentQuestion ? setQuestionByNumber(server.questionNumberGlobal) : false

        console.log(server)
    }
})