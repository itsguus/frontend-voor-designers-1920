/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/


/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true */


/*eslint-env browser*/

/*eslint 'no-console': 0*/

var hexCode = document.querySelector("#hex").value;
var redValue = document.querySelector("#red").value;
var greenValue = document.querySelector("#green").value;
var blueValue = document.querySelector("#blue").value;

var totalRedMax,
    totalGreenMax,
    totalBlueMax,
    totalRedMin,
    totalGreenMin,
    totalBlueMin;


var colors1 = ["5d7b00",
             "382c06",
             "eceb39"],
    colors2 = ["3f2b2a",
            "b59b8c",
            "41322f"],
    colors3 = ["202e0a",
            "5d7c39",
            "18310a"],
    colors4 = ["24635c",
            "ce9493",
            "001a3d"],
    colors5 = ["e7d0c0",
            "a77a59",
            "190a03"],
    colors6 = ["66b6cd",
            "d6243e",
            "dfe9ea"],
    colors7 = ["b4b5b7",
            "314150",
            "667282"],
    colors8 = ["df9c72",
            "714a43",
            "a07771"];

var activated = false;

function updateBlocks() {

    var baseRed = parseInt(hexCode.substr(1, 2), 16),
        baseGreen = parseInt(hexCode.substr(3, 2), 16),
        baseBlue = parseInt(hexCode.substr(5, 2), 16),
        rangeRed = document.querySelector("#redtext").value,
        rangeGreen = document.querySelector("#greentext").value,
        rangeBlue = document.querySelector("#bluetext").value;

    totalRedMax = (+baseRed) + (+rangeRed);
    totalGreenMax = (+baseGreen) + (+rangeGreen);
    totalBlueMax = (+baseBlue) + (+rangeBlue);
    totalRedMin = (+baseRed) - (+rangeRed);
    totalGreenMin = (+baseGreen) - (+rangeGreen);
    totalBlueMin = (+baseBlue) - (+rangeBlue);

    if (totalRedMax > 255) {
        totalRedMax = 255;
    }
    if (totalGreenMax > 255) {
        totalGreenMax = 255;
    }
    if (totalBlueMax > 255) {
        totalBlueMax = 255;
    }
    if (totalRedMin < 0) {
        totalRedMin = 0;
    }
    if (totalGreenMin < 0) {
        totalGreenMin = 0;
    }
    if (totalBlueMin < 0) {
        totalBlueMin = 0;
    }

    if (totalRedMax < 16) {
        totalRedMax = "0" + totalRedMax.toString(16);
    }
    if (totalGreenMax < 16) {
        totalGreenMax = "0" + totalGreenMax.toString(16);
    }
    if (totalBlueMax < 16) {
        totalBlueMax = "0" + totalBlueMax.toString(16);
    }

    document.querySelector(".c1").style.backgroundColor = ("#" + totalRedMin.toString(16) + totalGreenMin.toString(16) + totalBlueMin.toString(16));
    document.querySelector(".c2").style.backgroundColor = hexCode;
    document.querySelector(".c3").style.backgroundColor = ("#" + totalRedMax.toString(16) + totalGreenMax.toString(16) + totalBlueMax.toString(16));
    //
    //    console.log("Red Value = " + redValue);
    //    console.log("Red Base = " + baseRed.toString(16));
    //    console.log("Red Max = " + totalRedMax.toString(16));
    //    console.log("Red Min = " + totalRedMin.toString(16));
    //    console.log(hexCode);
    //    console.log("#" + totalRedMax.toString(16) + totalGreenMax.toString(16) + totalBlueMax.toString(16));
}

function updateHex() {
    hexCode = document.querySelector("#hex").value;
    document.querySelector("#hextext").value = hexCode;
    updateBlocks();
    if (activated) {
        searchColors();
    }
}

function updateRed() {
    redValue = document.querySelector("#red").value;
    document.querySelector("#redtext").value = redValue;
    updateBlocks();
    if (activated) {
        searchColors();
    }
}

function updateGreen() {
    greenValue = document.querySelector("#green").value;
    document.querySelector("#greentext").value = greenValue;
    updateBlocks();
    if (activated) {
        searchColors();
    }
}

function updateBlue() {
    blueValue = document.querySelector("#blue").value;
    document.querySelector("#bluetext").value = blueValue;
    updateBlocks();
    if (activated) {
        searchColors();
    }
}

function codeToColor() {
    hexCode = document.querySelector("#hextext").value;
    document.querySelector("#hex").value = hexCode;
    updateBlocks();
    if (activated) {
        searchColors();
    }
}




function searchColors() {
    var j;
    for (j = 1; j < 9; j++) {
        document.querySelector(".img" + j).classList.remove("show");
        document.querySelector("h1").classList.remove("show");

    }
    var baseRed = parseInt(hexCode.substr(1, 2), 16),
        baseGreen = parseInt(hexCode.substr(3, 2), 16),
        baseBlue = parseInt(hexCode.substr(5, 2), 16),
        rangeRed = document.querySelector("#redtext").value,
        rangeGreen = document.querySelector("#greentext").value,
        rangeBlue = document.querySelector("#bluetext").value;

    totalRedMax = (+baseRed) + (+rangeRed);
    totalGreenMax = (+baseGreen) + (+rangeGreen);
    totalBlueMax = (+baseBlue) + (+rangeBlue);
    totalRedMin = (+baseRed) - (+rangeRed);
    totalGreenMin = (+baseGreen) - (+rangeGreen);
    totalBlueMin = (+baseBlue) - (+rangeBlue);

    if (totalRedMax > 255) {
        totalRedMax = 255;
    }
    if (totalGreenMax > 255) {
        totalGreenMax = 255;
    }
    if (totalBlueMax > 255) {
        totalBlueMax = 255;
    }
    if (totalRedMin < 0) {
        totalRedMin = 0;
    }
    if (totalGreenMin < 0) {
        totalGreenMin = 0;
    }
    if (totalBlueMin < 0) {
        totalBlueMin = 0;
    }
    var i,
        redVal,
        greenVal,
        blueVal;
    for (i = 0; i < colors1.length; i++) {
        redVal = parseInt(colors1[i].substr(0, 2), 16);
        greenVal = parseInt(colors1[i].substr(2, 2), 16);
        blueVal = parseInt(colors1[i].substr(4, 2), 16);

        if (parseInt(colors1[i].substr(0, 2), 16) < 16) {
            redVal = "0" + parseInt(colors1[i].substr(0, 2), 16);
        }
        if (parseInt(colors1[i].substr(2, 2), 16) < 16) {
            greenVal = "0" + parseInt(colors1[i].substr(2, 2), 16);
        }
        if (parseInt(colors1[i].substr(4, 2), 16) < 16) {
            blueVal = "0" + parseInt(colors1[i].substr(4, 2), 16);
        }

        //        console.log("Hex zou moeten zijn: #" + redVal.toString(16) + greenVal.toString(16) + blueVal.toString(16));
        //
        //        console.log("R: " + totalRedMin + " " + redVal + " " + totalRedMax);
        //        console.log("G: " + totalGreenMin + " " + greenVal + " " + totalGreenMax);
        //        console.log("B: " + totalBlueMin + " " + blueVal + " " + totalBlueMax);
        //        console.log(" ");
        if ((redVal > totalRedMin && redVal < totalRedMax) && (greenVal > totalGreenMin && greenVal < totalGreenMax) && (blueVal > totalBlueMin && blueVal < totalBlueMax)) {
            document.querySelector(".img1").classList.add("show");
            document.querySelector("h1").classList.add("show");
        }
    }
    for (i = 0; i < colors2.length; i++) {
        redVal = parseInt(colors2[i].substr(0, 2), 16);
        greenVal = parseInt(colors2[i].substr(2, 2), 16);
        blueVal = parseInt(colors2[i].substr(4, 2), 16);
        if (parseInt(colors2[i].substr(0, 2), 16) < 16) {
            redVal = "0" + parseInt(colors2[i].substr(0, 2), 16);
        }
        if (parseInt(colors2[i].substr(2, 2), 16) < 16) {
            greenVal = "0" + parseInt(colors2[i].substr(2, 2), 16);
        }
        if (parseInt(colors2[i].substr(4, 2), 16) < 16) {
            blueVal = "0" + parseInt(colors2[i].substr(4, 2), 16);
        }
        if ((redVal > totalRedMin && redVal < totalRedMax) && (greenVal > totalGreenMin && greenVal < totalGreenMax) && (blueVal > totalBlueMin && blueVal < totalBlueMax)) {
            document.querySelector(".img2").classList.add("show");
            document.querySelector("h1").classList.add("show");
        }
    }
    for (i = 0; i < colors3.length; i++) {
        redVal = parseInt(colors3[i].substr(0, 2), 16);
        greenVal = parseInt(colors3[i].substr(2, 2), 16);
        blueVal = parseInt(colors3[i].substr(4, 2), 16);
        if (parseInt(colors3[i].substr(0, 2), 16) < 16) {
            redVal = "0" + parseInt(colors3[i].substr(0, 2), 16);
        }
        if (parseInt(colors3[i].substr(2, 2), 16) < 16) {
            greenVal = "0" + parseInt(colors3[i].substr(2, 2), 16);
        }
        if (parseInt(colors3[i].substr(4, 2), 16) < 16) {
            blueVal = "0" + parseInt(colors3[i].substr(4, 2), 16);
        }
        if ((redVal > totalRedMin && redVal < totalRedMax) && (greenVal > totalGreenMin && greenVal < totalGreenMax) && (blueVal > totalBlueMin && blueVal < totalBlueMax)) {
            document.querySelector(".img3").classList.add("show");
            document.querySelector("h1").classList.add("show");
        }
    }
    for (i = 0; i < colors4.length; i++) {
        redVal = parseInt(colors4[i].substr(0, 2), 16);
        greenVal = parseInt(colors4[i].substr(2, 2), 16);
        blueVal = parseInt(colors4[i].substr(4, 2), 16);
        if (parseInt(colors4[i].substr(0, 2), 16) < 16) {
            redVal = "0" + parseInt(colors4[i].substr(0, 2), 16);
        }
        if (parseInt(colors4[i].substr(2, 2), 16) < 16) {
            greenVal = "0" + parseInt(colors4[i].substr(2, 2), 16);
        }
        if (parseInt(colors4[i].substr(4, 2), 16) < 16) {
            blueVal = "0" + parseInt(colors4[i].substr(4, 2), 16);
        }
        if ((redVal > totalRedMin && redVal < totalRedMax) && (greenVal > totalGreenMin && greenVal < totalGreenMax) && (blueVal > totalBlueMin && blueVal < totalBlueMax)) {
            document.querySelector(".img4").classList.add("show");
            document.querySelector("h1").classList.add("show");

        }
    }
    for (i = 0; i < colors5.length; i++) {
        redVal = parseInt(colors5[i].substr(0, 2), 16);
        greenVal = parseInt(colors5[i].substr(2, 2), 16);
        blueVal = parseInt(colors5[i].substr(4, 2), 16);
        if (parseInt(colors5[i].substr(0, 2), 16) < 16) {
            redVal = "0" + parseInt(colors5[i].substr(0, 2), 16);
        }
        if (parseInt(colors5[i].substr(2, 2), 16) < 16) {
            greenVal = "0" + parseInt(colors5[i].substr(2, 2), 16);
        }
        if (parseInt(colors5[i].substr(4, 2), 16) < 16) {
            blueVal = "0" + parseInt(colors5[i].substr(4, 2), 16);
        }
        if ((redVal > totalRedMin && redVal < totalRedMax) && (greenVal > totalGreenMin && greenVal < totalGreenMax) && (blueVal > totalBlueMin && blueVal < totalBlueMax)) {
            document.querySelector(".img5").classList.add("show");
            document.querySelector("h1").classList.add("show");

        }
    }
    for (i = 0; i < colors6.length; i++) {
        redVal = parseInt(colors6[i].substr(0, 2), 16);
        greenVal = parseInt(colors6[i].substr(2, 2), 16);
        blueVal = parseInt(colors6[i].substr(4, 2), 16);
        if (parseInt(colors6[i].substr(0, 2), 16) < 16) {
            redVal = "0" + parseInt(colors6[i].substr(0, 2), 16);
        }
        if (parseInt(colors6[i].substr(2, 2), 16) < 16) {
            greenVal = "0" + parseInt(colors6[i].substr(2, 2), 16);
        }
        if (parseInt(colors6[i].substr(4, 2), 16) < 16) {
            blueVal = "0" + parseInt(colors6[i].substr(4, 2), 16);
        }
        if ((redVal > totalRedMin && redVal < totalRedMax) && (greenVal > totalGreenMin && greenVal < totalGreenMax) && (blueVal > totalBlueMin && blueVal < totalBlueMax)) {
            document.querySelector(".img6").classList.add("show");
            document.querySelector("h1").classList.add("show");
        }
    }
    for (i = 0; i < colors7.length; i++) {
        redVal = parseInt(colors7[i].substr(0, 2), 16);
        greenVal = parseInt(colors7[i].substr(2, 2), 16);
        blueVal = parseInt(colors7[i].substr(4, 2), 16);
        if (parseInt(colors7[i].substr(0, 2), 16) < 16) {
            redVal = "0" + parseInt(colors7[i].substr(0, 2), 16);
        }
        if (parseInt(colors7[i].substr(2, 2), 16) < 16) {
            greenVal = "0" + parseInt(colors7[i].substr(2, 2), 16);
        }
        if (parseInt(colors7[i].substr(4, 2), 16) < 16) {
            blueVal = "0" + parseInt(colors7[i].substr(4, 2), 16);
        }
        if ((redVal > totalRedMin && redVal < totalRedMax) && (greenVal > totalGreenMin && greenVal < totalGreenMax) && (blueVal > totalBlueMin && blueVal < totalBlueMax)) {
            document.querySelector(".img7").classList.add("show");
            document.querySelector("h1").classList.add("show");
        }
    }
    for (i = 0; i < colors8.length; i++) {
        redVal = parseInt(colors8[i].substr(0, 2), 16);
        greenVal = parseInt(colors8[i].substr(2, 2), 16);
        blueVal = parseInt(colors8[i].substr(4, 2), 16);
        if (parseInt(colors8[i].substr(0, 2), 16) < 16) {
            redVal = "0" + parseInt(colors8[i].substr(0, 2), 16);
        }
        if (parseInt(colors8[i].substr(2, 2), 16) < 16) {
            greenVal = "0" + parseInt(colors8[i].substr(2, 2), 16);
        }
        if (parseInt(colors8[i].substr(4, 2), 16) < 16) {
            blueVal = "0" + parseInt(colors8[i].substr(4, 2), 16);
        }
        if ((redVal > totalRedMin && redVal < totalRedMax) && (greenVal > totalGreenMin && greenVal < totalGreenMax) && (blueVal > totalBlueMin && blueVal < totalBlueMax)) {
            document.querySelector(".img8").classList.add("show");
            document.querySelector("h1").classList.add("show");
        }
    }
    activated = true;
}


updateBlocks();
document.querySelector("#hex").addEventListener("change", updateHex);
document.querySelector("#red").addEventListener("input", updateRed);
document.querySelector("#green").addEventListener("input", updateGreen);
document.querySelector("#blue").addEventListener("input", updateBlue);
document.querySelector("#hextext").addEventListener("change", codeToColor);
document.querySelector(".search").addEventListener("click", searchColors);
