// KONSTANTY

// Nad sekcemi
const buttonFullscreen = document.getElementById('button-fullscreen')

// Section Uvod
const sectionUvod = document.getElementById('uvod')
const loginInputGroup = document.getElementById('login-input-group')
const loginInputName = document.getElementById('login-input-name')
const loginInputMan = document.getElementById('login-input-man')
const loginInputWoman = document.getElementById('login-input-woman')
const buttonLogin = document.getElementById('button-login')
const buttonLeaderLogin = document.getElementById('button-leader-login')

// Section cekani na skupinu
const sectionCekaniNaSkupinu = document.getElementById('cekani-na-skupinu')

// Section rozhodovani
const sectionRozhodovani = document.getElementById('rozhodovani')
const questionBody = document.getElementById('question-body')
const questionOptions = document.getElementById('question-options')

// Section pred vyhodnocenim
const sectionPredVyhodnocenim = document.getElementById('pred-vyhodnocenim')

// Section vyhodnoceni
const sectionVyhodnoceni = document.getElementById('vyhodnoceni')
const laws = document.getElementById('laws')

// Section ukonceni rady
const sectionUkonceniRady = document.getElementById('ukonceni-rady')

// Section persona
const sectionPersona = document.getElementById('persona')
const personaCard = document.getElementById('persona-card')
const personaName = document.getElementById('persona-name')
const personaText = document.getElementById('persona-text')
const personaSummary = document.getElementById('persona-summary')

// My constants
const numerOfSections = 8

// VARIABLES
var currentSection = 1
var currentQuestion = 1
var localQuestionAnswersInOrder = []
var server = {}
var thisUser = {}


// FUNKCE

function loadQuestionsFromCSV(pathToQuestions) {
    
}

var windowInFullscreenMode = false
var documentElement = document.documentElement
function toggleFulscreen() {
    
}

function openFullscreen() {
    
}

function closeFullscreen() {
    
}

function tryToLoginAndStartRealTimeSocket() {

}

function showSectionByNumber(sectionNumber) {
    switch (sectionNumber) {
        case 1:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-1)
            document.body.style.backgroundPositionY = '0%'
            break;
        case 2:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-1)
            document.body.style.backgroundPositionY = '0%'
            break;
        case 3:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-1)
            document.body.style.backgroundPositionY = '0%'
            break;
        case 4:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-1)
            document.body.style.backgroundPositionY = '0%'
            break;
        case 5:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-1)
            document.body.style.backgroundPositionY = '0%'
            showLaws()
            break;
        case 6:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-1)
            document.body.style.backgroundPositionY = '0%'
            break;
        case 7:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-1)
            document.body.style.backgroundPositionY = '50%'
            sectionPersona.classList.remove("active")
            showPersona()
            break;
        case 8:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-2)
            document.body.style.backgroundPositionY = '70%'
            sectionPersona.classList.add("active")
            showPersona()
            showImplication()
            break;
        default:
            console.log("Pouziti neplatneho cisla sekce pro zmenu")
            break;
    }
    
}

function nextSection() {
    if( currentSection < numerOfSections) {
        showSectionByNumber(currentSection+1)
    } else {
        console.log("Cislo sekce nelze vice zvysit")
    }
}

function previousSection() {
    if( currentSection > 1) {
        showSectionByNumber(currentSection-1)
    } else {
        console.log("Cislo sekce nelze vice snizit")
    }
}

let currentSectionObject, allSectionObjects
function updateCSSclassHideForSectionByNumber(sectionNumber) {
    allSectionObjects = document.getElementsByTagName("SECTION")
    currentSectionObject = allSectionObjects[sectionNumber]

    //console.log(allSectionObjects)

    for (let index = 0; index < allSectionObjects.length; index++) {
        const element = allSectionObjects[index];
        element.classList.add('hide')        
    }

    currentSectionObject.classList.remove('hide')
}

function validateSectionNumber(sectionNumber) {
    
}

function showQuestionByNumber(questionNumber) {
    if(validateQuestionNumber(questionNumber)) {
        console.log("Otazka zmenena na " + questionNumber)
        currentQuestion = questionNumber
        var question = questions[questionNumber-1]
        questionBody.innerText = question.questionText
        questionOptions.innerHTML = []
        var optionNumber = 0;
        question.questionOptions.forEach(option => {
            const button = document.createElement('button')
            button.innerText = option.optionText
            optionNumber++
            button.dataset.optionNumber = optionNumber
            button.addEventListener('click',processAnswer)
            questionOptions.appendChild(button)
        })
    } else {
        console.log("Nelze " + questionNumber)
    }
}

function validateQuestionNumber(questionNumber) {
    return questionNumber <= questions.length && questionNumber > 0 ? true : false
}

function nextQuestion() {
    showQuestionByNumber(currentQuestion+1)
}

function previousQuestion() {
    showQuestionByNumber(currentQuestion-1)
}

function sendVote(questionNumber, questionOption) {
    
}

function processAnswer(answerClick) {
    deselectAnswers(answerClick)
    selectAnswer(answerClick.target)
    zmenitHlas(currentQuestion, answerClick.target.dataset.optionNumber)
}

function selectAnswer(answer) {
    answer.classList.toggle('stisknuto')
}

function deselectAnswers(answer) {
    var children = answer.target.parentElement.children
    console.log(children)
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        child.classList.remove('stisknuto')
    }
}

function checkAnswerIfSelected(answer) {
    
}

function clearChildrenOfHTMLObject(htmlObject) {
    
}

function generateAndAppendLawsFromAnswersLocal(params) {
    
}

function generateAndAppendLawsFromAnswersFromOnlineGroup(params) {
    
}

function pridatHlas(question = currentQuestion, option) {
    socket.emit('pridat hlas', {questionNumber : question, option : option})
    console.log('pridan hlas ' + question + option)
}

function odebratHlas(question = currentQuestion) {
    socket.emit('odebrat hlas', {questionNumber : question})
    console.log('odebran hlas ' + question)
}

function zmenitHlas(question = currentQuestion, option) {
    odebratHlas(question)
    pridatHlas(question, option)
}

function showLaws(params) {

    // vzcistit
    laws.innerHTML = ""

    questions.forEach(function callback(question, index) {
        const paragraph = document.createElement('p')
        maximum = Math.max(...server.results[index])
        maxOptionIndex = 0
        for (let i = 2; i > -1; i--) {       
            server.results[index][i] == maximum ? maxOptionIndex = i : false
            // console.log(i)
        }
        console.log(maxOptionIndex)
        console.log('------')
        paragraph.innerText = question.questionOptions[maxOptionIndex].optionLaw
        laws.appendChild(paragraph)
    })
}

function showImplication(params) {
    personaSummary.innerHTML = ""

    questions.forEach(function callback(question, index) {
        const paragraph = document.createElement('span')
        maximum = Math.max(...server.results[index])
        maxOptionIndex = 0
        for (let i = 2; i > -1; i--) {       
            server.results[index][i] == maximum ? maxOptionIndex = i : false
            // console.log(i)
        }
        console.log(maxOptionIndex)
        console.log('------')
        paragraph.innerText = question.questionOptions[maxOptionIndex].optionPersonas[thisUser.persona-1].personaText.trim() + ' '
        personaSummary.appendChild(paragraph)
    })
}

function showPersona() {
    personaIndex = thisUser.persona-1
    personaName.innerText = personas[personaIndex].name
    personaText.innerText = personas[personaIndex].text
}




// ON LOAD

window.onload = function() {
    showSectionByNumber(1)
    showQuestionByNumber(1)

    //socket.emit('prihlasit dite', {userId : socket.id, name: "Mira", gender: "man", group: "slunicko"});
    
    socket.on('state of server', function(msg) {
        server = {
            groupName : msg.groupName, 
            groupLeaderId : msg.groupLeaderId, 
            onlineUsers : msg.onlineUsers, 
            sectionNumberGlobal : msg.sectionNumberGlobal, 
            questionNumberGlobal : msg.questionNumberGlobal,
            results : msg.results
        }

        server.onlineUsers.forEach(user => {
            if(user.id == socket.id) {
                thisUser = user
            }
        })

        server.sectionNumberGlobal != currentSection ? showSectionByNumber(server.sectionNumberGlobal) : false
        server.questionNumberGlobal != currentQuestion ? showQuestionByNumber(server.questionNumberGlobal) : false
        console.log(server)
    })
};


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up
        nextQuestion()
    }
    else if (e.keyCode == '40') {
        // down
        previousQuestion()
    }
    else if (e.keyCode == '37') {
        // left
        previousSection()
    }
    else if (e.keyCode == '39') {
        // right
        nextSection()
    }
}




// EVENT LISTENERS
buttonLogin.addEventListener("click", function() {
    var userGroup = loginInputGroup.value
    var userName = loginInputName.value
    var userGender = ""
    loginInputMan.checked ? userGender = "man": loginInputWoman.checked ? userGender = "woman" : userGender = ""
    if(userGroup && userName && userGender) {
        // login
        buttonLogin.innerHTML = "odeslano";
        socket.emit('prihlasit dite', {userId : socket.id, name: userName, gender: userGender, group: userGroup});
    } else {
        // neco chybi
        if(!userGroup) showToastError('Vyplňte název skupiny')
        if(!userName) showToastError('Vyplňte vaše jméno')
        if(!userGender) showToastError('Zvolte možnost pohlaví muž/žena')
        
    }
    console.log(userGroup)
    console.log(userName)
    console.log(userGender)
});