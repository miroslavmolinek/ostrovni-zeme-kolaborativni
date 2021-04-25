
// console.log(questions[0])

const csvFilePath='./questions.csv'
const csv=require('csvtojson')
var questionsJSON = [{}]
var numberOfOptionsPerQuestion = 3
var numberOfPersonasPerOption = 4
csv()
.fromFile(csvFilePath)
.then((questionsRawJSON)=>{
    //questionsRawJSON.push(jsonObj);
    //console.log(questionsRawJSON)
    questionsRawJSON.forEach(questionRaw => {
        // if(questionRaw.CisloMoznosti == 1 ) {
            questionsJSON[questionRaw.CisloOtazky-1] = {}
            questionsJSON[questionRaw.CisloOtazky-1].questionText = questionRaw.ZneniOtazky
            questionsJSON[questionRaw.CisloOtazky-1].questionOptions = []
            for (let i = 1; i <= numberOfOptionsPerQuestion.length; i++) {
                questionRaw.CisloMoznosti == i ? questionsJSON[questionRaw.CisloOtazky-1].questionOptions[questionRaw.CisloMoznosti-1] = questionRaw.CisloMoznosti : false
            }
            
            // if(questionsJSON[questionRaw.CisloOtazky-1].questionOptions.length == 'undefined' && questionsJSON[questionRaw.CisloOtazky-1].questionOptions.length == 0) { 
            //     questionsJSON[questionRaw.CisloOtazky-1].questionOptions = []
            //     questionsJSON[questionRaw.CisloOtazky-1].questionOptions[questionRaw.CisloMoznosti-1] = questionRaw.CisloMoznosti
            //     console.log(questionRaw.CisloMoznosti)
            // } else {
            //     questionsJSON[questionRaw.CisloOtazky-1].questionOptions[questionRaw.CisloMoznosti-1] = questionRaw.CisloMoznosti
            // }
        // }

        // if(questionRaw.CisloMoznosti == 2 ) {
        //     questionsJSON[questionRaw.CisloOtazky-1].questionOptions[questionRaw.CisloMoznosti-1] = questionRaw.CisloMoznosti
        // }
            
        // if(questionRaw.CisloMoznosti == 3 ) {
        //     questionsJSON[questionRaw.CisloOtazky-1].questionOptions[questionRaw.CisloMoznosti-1] = questionRaw.CisloMoznosti
        // }
        
        // console.log("konex froeach pro otazku " + questionRaw.CisloOtazky + " zde je jeji vliv na qJSON:")
        // console.log(questionsJSON)
    });

    console.log("vysledny seznam")
    console.log(questionsJSON)
})