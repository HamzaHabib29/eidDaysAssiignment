var date = new Date();
var eid1 = new Date("july 10 2022");
var eid2 = new Date("july 11 2022");
var eid3 = new Date("july 12 2022");

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month= ["January","February","March","April","May","June","July","August","September","October","November","December"];

var DayEid1 = dayNames[eid1.getDay()];
var DayEid2 = dayNames[eid2.getDay()];
var DayEid3 = dayNames[eid3.getDay()];

var MonthEid1 = month[eid1.getMonth()];
var MonthEid2 = month[eid2.getMonth()];
var MonthEid3 = month[eid3.getMonth()];

var leftMsec1 = eid1.getTime() - date.getTime();
var leftMsec2 = eid2.getTime() - date.getTime();
var leftMsec3 = eid3.getTime() - date.getTime();

var daysLeft1 = Math.floor(leftMsec1/(1000*60*60*24))
var daysLeft2 = Math.floor(leftMsec2/(1000*60*60*24))
var daysLeft3 = Math.floor(leftMsec3/(1000*60*60*24))

var hoursLeft1 = Math.floor(leftMsec1/(1000*60*60))
var hoursLeft2 = Math.floor(leftMsec2/(1000*60*60))
var hoursLeft3 = Math.floor(leftMsec3/(1000*60*60))

var minLeft2 = Math.floor(leftMsec2/(1000*60))
var minLeft3 = Math.floor(leftMsec3/(1000*60))
var minLeft1 = Math.floor(leftMsec1/(1000*60))

document.write("<h1>Eid Day 1</h1>");
document.write("Eid day 1 will be on " + "<b>" + eid1.getDate() + " " + MonthEid1 + " " + eid1.getFullYear() + "</b>.<br>")
document.write("<b>Day: </b>" + DayEid1 + "<br>")
document.write("<b>Days Left: </b>" + daysLeft1 + "<br>")
document.write("<b>Hours Left: </b>" + hoursLeft1 + "<br>")
document.write("<b>Minutes Left: </b>" + minLeft1 + "<br><hr>")

document.write("<h1>Eid Day 2</h1>");
document.write("Eid day 2 will be on " + "<b>" + eid2.getDate() + " " + MonthEid2 + " " + eid2.getFullYear() + "</b>.<br>")
document.write("<b>Day: </b>" + DayEid2 + "<br>")
document.write("<b>Days Left: </b>" + daysLeft2 + "<br>")
document.write("<b>Hours Left: </b>" + hoursLeft2 + "<br>")
document.write("<b>Minutes Left: </b>" + minLeft2 + "<br><hr>")

document.write("<h1>Eid Day 3</h1>");
document.write("Eid day 3 will be on " + "<b>" + eid3.getDate() + " " + MonthEid3 + " " + eid3.getFullYear() + "</b>.<br>")
document.write("<b>Day: </b>" + DayEid3 + "<br>")
document.write("<b>Days Left: </b>" + daysLeft3 + "<br>")
document.write("<b>Hours Left: </b>" + hoursLeft3 + "<br>")
document.write("<b>Minutes Left: </b>" + minLeft3 + "<br><hr>")





