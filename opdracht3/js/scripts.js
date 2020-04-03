/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/* eslint-env es6 */
/* eslint-disable */

/*eslint 'no-console': 0*/

// CopyLeft Guus Groenink

var body = document.querySelector('body'); // spreekt voor zich
var country = "Netherlands"; // Mocht je een andere afbeelding pakken kun je de API makkelijk aanpassen door deze variabele aan te passen naar een ander land.

//------------------------------------------------------------------------------------------
// van https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript. Gekopieerd because why reinvent the wheel.
var currentDate = new Date(); // Vandaag
var dd = String(currentDate.getDate()).padStart(2, '0'); // vandaag in dd
var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //vandaag in mm
var yyyy = currentDate.getFullYear(); // vandaag in yyyy
//------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------
//source: https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
//gekopieerd en mn eigen versie van gemaakt. Ik heb dit nodig omdat de API begint op 22 januari. Ik moet de dagen vanaf
//dan hebben in daysFromStartOfJson MIN 1 zodat ik de meest recente data uit de API krijg. (API cases zijn opgebouwd met cijfers)
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const dateStartJson = new Date(2020, 1, 22);
const currentDateToCalculate = new Date(yyyy, mm, dd);
const daysFromStartOfJson = Math.round(Math.abs((dateStartJson - currentDateToCalculate) / oneDay)) - 1;
//------------------------------------------------------------------------------------------


var calcDate; //De datum waarmee ik ga rekenen. Deze wil ik globaal hebben zodat ik die in elke functie kan gebruiken mocht ik dat willen.
var confirmed; //Het aantal besmette nederlanders.
const calcDateElement = document.querySelector('#date'); //Als ik iets wil aanpassen hoef ik geen queryselector meer te typen.
const confirmedElement = document.querySelector("#confirmed"); //same


//------------------------------------------------------------------------------------------
//NOTE: Ik had eerst ook een berekening gemaakt met Deaths. Hoewel dit voor de app
//wel oke was geweest vond ik het een beetje grimmig om hier een schatting van te
//doen. Aangezien ik met echte cijfers werk via de API voelde het niet goed
//om dit door te zetten. Ik was er code-gewijs wel uit gekomen in ieder geval. 
//De meeste code hiervan heb ik niet verwijderd maar weggecomment.
//------------------------------------------------------------------------------------------


//var deaths;
//var recovered;
//const deathsElement = document.querySelector('#deaths'); 
//const recoveredElement = document.querySelector('#recovered');

var counter = 1; //Voor de date. Is globaal omdat de date zichzelf met een timer loopt.
var countRate; //Die ellendige kutformule die de macht aangeeft voor het exponentieel tellen.
var SN = [document.querySelector(".SN0"), //Node #1  SN = spreadNode
          document.querySelector(".SN1"), //Node #2
          document.querySelector(".SN2")]; //Node #3
var aantalNederlanders = 17400000; // Staat hierboven voor het gemak. Zodra de teller meer dan dit wordt stopt ie.
var activated = false; // Wordt true zodra je op start drukt. Zorgt ervoor dat de loopende functie niet vaker dan 1 keer tegelijk gaan runnen. 
var allowedToCount = false; // pause/play op het hele geintje.
var jKey = document.querySelector('#j');
var fKey = document.querySelector('#f');
var speed = 50;
var done = false;

let requestURL = 'https://pomber.github.io/covid19/timeseries.json'; //API link 
let request = new XMLHttpRequest(); //API request
request.open('GET', requestURL); //Get
request.responseType = 'json'; //= JSON
request.send(); //Go

//------------------------------------------------------------------------------------------
// source: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//------------------------------------------------------------------------------------------


function showDate() { // Een functie die de huidige datum in de juiste format laat zien in de browser en als ddmmyyyy opslaat in mijn calcDate variabele. 
    calcDateElement.textContent = dd + "-" + mm + "-" + yyyy;
    calcDate = dd + mm + yyyy;
}

function showConfirmed(jsonObj) { // Een functie die de huidige besmette mensen ophaalt, laat zien in de browser en opslaat in mijn confirmed variabele. 
    confirmed = jsonObj[country][daysFromStartOfJson]["confirmed"];
    confirmedElement.textContent = numberWithCommas(confirmed);
}


//------------------------------------------------------------------------------------------
//function showDeaths(jsonObj) {
//    deaths = jsonObj[country][daysFromStartOfJson]["deaths"];
//    deathsElement.textContent = numberWithCommas(deaths);
//}

//function showRecovered(jsonObj) {
//    recovered = jsonObj[country][daysFromStartOfJson]["recovered"];
//    recoveredElement.textContent = numberWithCommas(recovered);
//}
//------------------------------------------------------------------------------------------


function die() {
    done = true;
    document.querySelector(".endbox").style.opacity = 1;
    document.querySelector(".endbox").style.transition = "all 1s ease";
    var dateStart = new Date(),
        endDate = new Date(yyyy, mm - 1, dd),
        amountDays = Math.round(Math.abs((dateStart - endDate) / (24 * 60 * 60 * 1000))),
        message, whatHappened;
    console.log(amountDays);
    if (amountDays < 18) {
        message = "OH NO!";
        whatHappened = "Everybody got corona in such a short span..";
    }
    if (amountDays > 19 && amountDays < 30) {
        message = "OKAY...";
        whatHappened = "You stayed home a bit but the virus still spread too fast..";
    }
    if (45 < amountDays) {
        message = "CONGRATULATIONS";
        whatHappened = "Because of your quarantaining actions the hospitals had enough capacity to save the population!";
    }
    setTimeout(function () {
        document.querySelector("#endtext").textContent = message;
        document.querySelector("#endtext").style.opacity = 1;
        document.querySelector("#endtext").style.transition = "all 1s ease-in";
    }, 1000);
    setTimeout(function () {
        document.querySelector("#amountdays").textContent = amountDays + " DAYS";
        document.querySelector("#amountdays").style.opacity = 1;
        document.querySelector("#amountdays").style.transition = "all 1s ease-in";
    }, 2000);
    setTimeout(function () {
        document.querySelector("#whathappened").textContent = whatHappened;
        document.querySelector("#whathappened").style.opacity = 1;
        document.querySelector("#whathappened").style.transition = "all 1s ease-in";
    }, 3000);
    setTimeout(function () {
        document.querySelector(".buttonAgain").style.opacity = 1;
        document.querySelector(".buttonAgain").style.transition = "all 1s ease-in";
    }, 5000);
}


function countConfirmed() {
    if (allowedToCount) {
        if (confirmed > aantalNederlanders) {
            setTimeout(die, 1000);
        } else {
            confirmed = Math.round(Math.pow(confirmed, countRate));
            confirmedElement.textContent = numberWithCommas(confirmed);
            var i;
            for (i = 0; i < 3; i++) {
                SN[i].style.transform = "scale(" + (confirmed / 348060) + ")";
                SN[i].style.transform = "transition(" + speed + "ms)";
            }
            speed = speed - 0.25;
            if (speed < 15) {
                speed = 15;
            }
            setTimeout(countConfirmed, speed);
        }
    }
}

function calculateCountRate(jsonObj) {
    var x = jsonObj[country][daysFromStartOfJson]["confirmed"],
        y = 1200,
        i = aantalNederlanders;
    countRate = Math.pow(((Math.log(i) / Math.log(x))), (1 / y));
}

function grow() {
    var i;
    for (i = 0; i < 3; i++) {
        SN[i].classList.add('show');
    }
    countConfirmed();
}

function stayHome() {
    speed = speed + 5;
}

function goParty() {
    speed = speed - 15;
}


function dateTimer() {
    if (!done) {
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + counter);
        dd = String(tomorrow.getDate()).padStart(2, '0');
        mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
        yyyy = tomorrow.getFullYear();
        calcDateElement.textContent = dd + "-" + mm + "-" + yyyy;
        calcDate = dd + mm + yyyy;
        counter = counter + 1;
        setTimeout(dateTimer, 2000);
    }
}

request.onload = function () {
    const data = request.response;
    showDate();
    showConfirmed(data);
    //    showDeaths(data);
    //    showRecovered(data);
    calculateCountRate(data);
};

document.addEventListener("keydown", function (e) {
    if (e.key == " " && activated === false) {
        activated = true;
        allowedToCount = true;
        setTimeout(dateTimer, 3000);
        setTimeout(grow, 1000);
        document.querySelector(".startbox").classList.add("displaynone");
    }
    if (e.key == "f" && activated === true) {
        fKey.classList.toggle('keydown');
        stayHome();
    }
    if (e.key == "j" && activated === true) {
        jKey.classList.toggle('keydown');
        goParty();
    }
}, false);


document.addEventListener("keyup", function (e) {
    if (e.key == "f" && activated === true) {
        fKey.classList.toggle('keydown');
    }
    if (e.key == "j" && activated === true) {
        jKey.classList.toggle('keydown');
    }
}, false);


fKey.addEventListener("click", function () {
    fKey.classList.toggle('keydown');
    stayHome();
});

jKey.addEventListener("click", function () {
    jKey.classList.toggle('keydown');
    goParty();
});

document.querySelector(".buttonAgain").addEventListener("click", function () {
    location.reload();
});
