var todayDate = document.getElementById("todayDate");
var tomorrowDate = document.getElementById("tomorrowDate");
var tomorrowDate3 = document.getElementById("tomorrowDate3");
var tomorrowDate4 = document.getElementById("tomorrowDate4");
var tomorrowDate5 = document.getElementById("tomorrowDate5");
var tomorrowDate6 = document.getElementById("tomorrowDate6");
var tomorrowDate7 = document.getElementById("tomorrowDate7");


var today = new Date();
var tomorrow = new Date();
var tomorrow3 = new (Date);
var tomorrow4 = new (Date);
var tomorrow5 = new (Date);
var tomorrow6 = new (Date);
var tomorrow7 = new (Date);

tomorrow.setDate(today.getDate() + 1);
tomorrow3.setDate(today.getDate() + 2);
tomorrow4.setDate(today.getDate() + 3);
tomorrow5.setDate(today.getDate() + 4);
tomorrow6.setDate(today.getDate() + 5);
tomorrow7.setDate(today.getDate() + 6);



var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var formatter = new Intl.DateTimeFormat('id-ID', options);

todayDate.innerHTML = formatter.format(today);
tomorrowDate.innerHTML = formatter.format(tomorrow);
tomorrowDate3.innerHTML = formatter.format(tomorrow3);
tomorrowDate4.innerHTML = formatter.format(tomorrow4);
tomorrowDate5.innerHTML = formatter.format(tomorrow5);
tomorrowDate6.innerHTML = formatter.format(tomorrow6);
tomorrowDate7.innerHTML = formatter.format(tomorrow7);
