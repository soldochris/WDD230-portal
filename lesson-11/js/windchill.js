
let tempH = parseFloat(document.getElementById("tempH").innerText);
let wSpeed = parseFloat(document.getElementById("wSpeed").innerText);

if (tempH < 51 && wSpeed > 3) {
    let wChill = 35.74 + 0.6215 * tempH - 35.75 * Math.pow(wSpeed, .16) + .4275 * tempH * Math.pow(wSpeed, .16);
    document.getElementById("wChill").innerText = parseInt(wChill);
}else{
    document.getElementById("wChill").innerText = "N/A";
}

//array for forecast days
const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
let nextdayList = [dayNum + 1, dayNum + 2, dayNum + 3, dayNum + 4, dayNum + 5];

for (let i = 0; i < nextdayList.length; i++) {
    if (nextdayList[i] % 7 == 0) {
        nextdayList[i] = 0;
    } else if (nextdayList[i] % 7 == 1) {
        nextdayList[i] = 1;
    } else if (nextdayList[i] % 7 == 2) {
        nextdayList[i] = 2;
    } else if (nextdayList[i] % 7 == 3) {
        nextdayList[i] = 3;
    } else if (nextdayList[i] % 7 == 4) {
        nextdayList[i] = 4;
    } else if (nextdayList[i] % 7 == 5) {
        nextdayList[i] = 5;
    } else {
        nextdayList[i] = 6;
    }
}

let day1 = document.getElementById("nameDay1").innerText = weekday[nextdayList[0]];
let day2 = document.getElementById("nameDay2").innerText = weekday[nextdayList[1]];
let day3 = document.getElementById("nameDay3").innerText = weekday[nextdayList[2]];
let day4 = document.getElementById("nameDay4").innerText = weekday[nextdayList[3]];
let day5 = document.getElementById("nameDay5").innerText = weekday[nextdayList[4]];