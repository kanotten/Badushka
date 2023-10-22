
function enter_button_function() {
    var text_box = document.getElementById("baduskha_answer_id");
    text_box.innerHTML = "Nothing you fool";
}

var question_box = document.getElementById("question_box_id");
question_box.addEventListener("keyup", function (e){
    // todo: use something that is not deprecated. 
    if (e.which === 13){
        enter_button_function();
    }
});


var button = document.getElementById("enter_button_id");
button.onclick = enter_button_function;