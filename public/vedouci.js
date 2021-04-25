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
const responses = document.getElementById('responses')


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
    console.log('Otazka zmenena na ' + currentQuestion)
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
        results : msgresults
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

        setSectionByNumber(server.sectionNumberGlobal)

        setQuestionByNumber(server.questionNumberGlobal)

        console.log(server)
    }
})