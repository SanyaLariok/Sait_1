var date = new Date();
footerdata = "&#169; " + "Roman & Alex corporation " + date.getFullYear();
document.getElementById("footer_data").innerHTML = footerdata;

headerdata='Клуб кожевенного мастерства';
document.getElementById("header").innerHTML = headerdata;

function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

function date_time()
{
    var current_datetime = new Date();
    var day = zero_first_format(current_datetime.getDate());
    var month = zero_first_format(current_datetime.getMonth()+1);
    var year = current_datetime.getFullYear();
    var hours = zero_first_format(current_datetime.getHours());
    var minutes = zero_first_format(current_datetime.getMinutes());
    var seconds = zero_first_format(current_datetime.getSeconds());

    return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
}

setInterval(function () {
    document.getElementById("footer_data").innerHTML = date_time();
}, 1000);