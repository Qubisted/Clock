function getTime(){
    var today = new Date();
    var time24 = today.getHours() + ":" + today.getMinutes() +  today.getSeconds();
    var timeString = time24;
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = (H < 12 || H === 24) ? " AM" : " PM";
    timeString = h + timeString.substr(2, 3) + ampm;
    document.getElementById("currenttime").value = timeString;
};

function saveInput(){
    var pagenotfound = document.getElementById("ay").innerHTML  = "404 could not fetch the results.."
}


getTime();
