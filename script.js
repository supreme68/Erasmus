//qst == qusetion
function CollectForms() {
    
    let qst1 = parseInt(document.forms["q1"]["answer"].value);
    let qst2 = parseInt(document.forms["q2"]["answer"].value);
    let qst3 = parseInt(document.forms["q3"]["answer"].value);
    let qst4 = parseInt(document.forms["q4"]["answer"].value);
    let qst5 = parseInt(document.forms["q5"]["answer"].value);
    let qst6 = parseInt(document.forms["q6"]["answer"].value);
    let qst7 = parseInt(document.forms["q7"]["answer"].value);
    let qst8 = parseInt(document.forms["q8"]["answer"].value);
    let qst9 = parseInt(document.forms["q9"]["answer"].value);
    let qst10 = parseInt(document.forms["q10"]["answer"].value);
    let result = qst1 + qst2 + qst3 + qst4 + qst5 + qst6 + qst7 + qst8 + qst9 + qst10;
  
    //I KNOW IT LOOKS TERRIBLE
    if (isNaN(result)) {
        alert("You havent answered all of the questions ");
    } else {
        if (result == 10) {
            window.open("result/unhealthy.html" , "unhealthy")
        }else if (result <= 20) {
            window.open("result/mediocre.html", "mediocre");
        } else {
            window.open("result/healthy.html", "healthy");
        }
    }

}
