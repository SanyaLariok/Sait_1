var delay_popup = 1;
setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);

function promptPassword(pass_answer) {

    document.getElementById('overlay').style.display = 'none';
    //error_msg = pass_answer;
    //if (error_msg == 'true') {
    //    document.getElementById('overlay').style.display = 'none';
    //
    //} else if (error_msg == 'false') {
    //     var error = document.getElementById("error")
    //     error.innerHTML = "<span style='color: red;'>" +
    //         "Неверная пара Логин/Пароль</span>"
    // }
}