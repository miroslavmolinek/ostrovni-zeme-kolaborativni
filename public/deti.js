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
const personaSummary = document.getElementById('persona-summary')

// My constants
const numerOfSections = 8

// VARIABLES
var currentSection = 1
var currentQuestion = 1
var localQuestionAnswersInOrder = []


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
            break;
        case 2:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-1)
            break;
        case 3:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-1)
            break;
        case 4:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-1)
            break;
        case 5:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-1)
            break;
        case 6:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-1)
            break;
        case 7:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-1)
            sectionPersona.classList.remove("active")
            break;
        case 8:
            currentSection = sectionNumber
            updateCSSclassHideForSectionByNumber(currentSection-2)
            sectionPersona.classList.add("active")
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
            // button.addEventListener('click',ulozitOdpovedAPokracovatNaDalsiOtazku)
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

let answer
function selectAnswer(answer) {
    
}

function deselectAnswer(answer) {
    
}

function checkAnswerIfSelected(answer) {
    
}

function clearChildrenOfHTMLObject(htmlObject) {
    
}

function generateAndAppendLawsFromAnswersLocal(params) {
    
}

function generateAndAppendLawsFromAnswersFromOnlineGroup(params) {
    
}


// ON LOAD

window.onload = function() {
    showSectionByNumber(1)
    showQuestionByNumber(1)

    //socket.emit('prihlasit dite', {userId : socket.id, name: "Mira", gender: "man", group: "slunicko"});
    
    var server = {}
    socket.on('state of server', function(msg) {
        server = {
            groupName : msg.groupName, 
            groupLeaderId : msg.groupLeaderId, 
            onlineUsers : msg.onlineUsers, 
            sectionNumberGlobal : msg.sectionNumberGlobal, 
            questionNumberGlobal : msg.questionNumberGlobal
        }
        showSectionByNumber(server.sectionNumberGlobal)
        showQuestionByNumber(server.questionNumberGlobal)
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