// REQUIRE LIBRARIES
//const csv = require('csvtojson')

// KONSTANTY

const buttonGroupStart = document.getElementById('button-group-start')
const buttonGroupClose = document.getElementById('button-group-close')
const inputGroupName = document.getElementById('input-group-name')

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

const questionsCSV = '../questionsOptionsLaws.csv'


// PROMENNE
let groupName, questionsJSON 
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
    buttonGroupStart.classList.toggle('hide')
    buttonGroupClose.classList.toggle('hide')
    inputGroupName.setAttribute("disabled", "true")
    if(typeof name == "string") { 
        groupName = name
        inputGroupName.value = name
    } else { 
        groupName = inputGroupName.value
    }
    console.log('Vytvorena skupina ' + groupName)
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
}

function sectionUpdate() {
    currentSection = sectionSelection.selectedIndex + 2
    console.log('Sekce zmenena na ' + currentSection)
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

function questionUpdate() {
    currentQuestion = questionSelection.selectedIndex + 1
    console.log('Otazka zmenena na ' + currentQuestion)
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
        userCounter.innerHTML = "0"
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

// function questionsFromCSV() {
//     csv()
//     .fromFile(questionsCSV)
//     .then((questionsJSON)=>{
//         console.log(questionsJSON);
//     })
// }

// EVENT LISTENERS

window.onload = function() {
    updateUserList()
    //startGroup('Plyskavice')
    questionsFromCSV()
};

sectionButtonForward.addEventListener('click',sectionForward)
sectionButtonPrevious.addEventListener('click',sectionPrevious)
sectionSelection.addEventListener('change', sectionUpdate)

questionButtonForward.addEventListener('click',questionForward)
questionButtonPrevious.addEventListener('click',questionPrevious)
questionSelection.addEventListener('change', questionUpdate)

buttonGroupStart.addEventListener('click', startGroup)
buttonGroupClose.addEventListener('click', closeGroup)