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

// Section persona
const personaCard = document.getElementById('persona-card')
const personaSummary = document.getElementById('persona-summary')


// PROMENNE
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
    
}

function nextSection() {
    
}

function previousSection() {
    
}

function validateSectionNumber(sectionNumber) {
    
}

function showQuestionByNumber(questionNumber) {
    
}

function validateQuestionNumber(questionNumber) {
    
}

function nextQuestion() {
    
}

function previousQuestion() {
    
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











var cisloSekce = 1
var cisloOtazky = 1
const pocetSekci = 7
const objektSekcePersony = document.getElementById('persona')

function zmenitSekciNa(cislo) {
    switch (cislo) {
        case 1:
            cisloSekce = cislo
            aktualizovatHideTriduCSS(cisloSekce-1)
            break;
        case 2:
            cisloSekce = cislo
            aktualizovatHideTriduCSS(cisloSekce-1)
            break;
        case 3:
            cisloSekce = cislo
            aktualizovatHideTriduCSS(cisloSekce-1)
            break;
        case 4:
            cisloSekce = cislo
            aktualizovatHideTriduCSS(cisloSekce-1)
            break;
        case 5:
            cisloSekce = cislo
            aktualizovatHideTriduCSS(cisloSekce-1)
            break;
        case 6:
            cisloSekce = cislo
            aktualizovatHideTriduCSS(cisloSekce-1)
            objektSekcePersony.classList.remove("active")
            break;
        case 7:
            cisloSekce = cislo
            aktualizovatHideTriduCSS(cisloSekce-2)
            objektSekcePersony.classList.add("active")
            break;
        default:
            console.log("Pouziti neplatneho cisla sekce pro zmenu")
            break;
    }
}

function predchoziSekce() {
    if( cisloSekce > 1) {
        zmenitSekciNa(cisloSekce-1)
    } else {
        console.log("Cislo sekce nelze vice snizit")
    }
}

function dalsiSekce() {
    if( cisloSekce < pocetSekci) {
        zmenitSekciNa(cisloSekce+1)
    } else {
        console.log("Cislo sekce nelze vice zvysit")
    }
}

function resetovatSekce() {
    zmenitSekciNa(1)
}

function zmenitOtazkuNa(cislo) {
    cisloOtazky = cislo
    // zobrazitOtazku()
}
let aktualniObjektSekce, vsechnySekce
function aktualizovatHideTriduCSS(cislo) {
    vsechnySekce = document.getElementsByTagName("SECTION")
    aktualniObjektSekce = vsechnySekce[cislo]

    //console.log(vsechnySekce)

    for (let index = 0; index < vsechnySekce.length; index++) {
        const element = vsechnySekce[index];
        element.classList.add('hide')        
    }

    aktualniObjektSekce.classList.remove('hide')
}


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        dalsiSekce()
    }
    else if (e.keyCode == '40') {
        predchoziSekce()
    }
    else if (e.keyCode == '37') {
       predchoziSekce()
    }
    else if (e.keyCode == '39') {
        dalsiSekce()
    }

}




// EVENT LISTENERS
