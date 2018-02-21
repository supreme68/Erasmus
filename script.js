
function CollectForms() {
  
   
    let qst1 = parseInt($("#q1 input[name = answer]:checked").val());  // parseInt(document.forms["q1"]["answer"].value);
    let qst2 = parseInt($("#q2 input[name = answer]:checked").val()); 
    let qst3 = parseInt($("#q3 input[name = answer]:checked").val()); 
    let qst4 = parseInt($("#q4 input[name = answer]:checked").val()); 
    let qst5 = parseInt($("#q5 input[name = answer]:checked").val()); 
    let qst6 = parseInt($("#q6 input[name = answer]:checked").val()); 
    let qst7 = parseInt($("#q7 input[name = answer]:checked").val()); 
    let qst8 = parseInt($("#q8 input[name = answer]:checked").val()); 
    let qst9 = parseInt($("#q9 input[name = answer]:checked").val()); 
    let qst10 = parseInt($("#q10 input[name = answer]:checked").val()); 
    let result = qst1 + qst2 + qst3 + qst4 + qst5 + qst6 + qst7 + qst8 + qst9 + qst10;
  
    //I KNOW IT LOOKS TERRIBLE
    if (isNaN(result)) {
        alert("Vous n'avez pas rеpondu а toutеs les questions ");
    } else {
        if (result <= 15) {
            window.open("result/unhealthy.html" , "unhealthy")
        }else if (result <= 20) {
            window.open("result/mediocre.html", "mediocre");
        } else {
            window.open("result/healthy.html", "healthy");
        }
    }

}
console.log("zafda");