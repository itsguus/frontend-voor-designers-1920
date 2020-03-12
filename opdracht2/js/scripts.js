/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
// CopyLeft Guus Groenink

var NUM_IMAGES = 9;
var images = document.querySelectorAll(".image");
var state = 0;

function cleanSlate(imgnr) {
    console.log("imgnr is " + imgnr);
    if (imgnr > 8 || imgnr < 0) {
        return;
    } else {
        images[imgnr].classList.remove("farLeft");
        images[imgnr].classList.remove("left");
        images[imgnr].classList.remove("middle");
        images[imgnr].classList.remove("goneLeft");
        images[imgnr].classList.remove("goneRight");
        images[imgnr].classList.remove("right");
        images[imgnr].classList.remove("farRight");
    }
}

function goneLeft(imgnr) {
    cleanSlate(imgnr);
    images[imgnr].classList.add("goneLeft");
}

function goneRight(imgnr) {
    cleanSlate(imgnr);
    images[imgnr].classList.add("goneRight");
}

function makeLeft(imgnr) {
    cleanSlate(imgnr);
    images[imgnr].classList.add("left");
}

function makeFarLeft(imgnr) {
    cleanSlate(imgnr);
    images[imgnr].classList.add("farLeft");
}

function makeFarRight(imgnr) {
    cleanSlate(imgnr);
    images[imgnr].classList.add("farRight");
}

function makeRight(imgnr) {
    cleanSlate(imgnr);
    images[imgnr].classList.add("right");
}

function makeMiddle(imgnr) {
    cleanSlate(imgnr);
    images[imgnr].classList.add("middle");
}



function setUp() {
    var i = 0;
    for (i = 0; i < NUM_IMAGES; i++) {
        if (i === 0 || i == 1) {
            images[i].classList.add("goneLeft");
        }
        if (i == 7 || i == 8) {
            images[i].classList.add("goneRight");

        }
        if (i == 2) {
            images[i].classList.add("farLeft");
        }
        if (i == 3) {
            images[i].classList.add("left");

        }
        if (i == 4) {
            images[i].classList.add("middle");

        }
        if (i == 5) {
            images[i].classList.add("right");

        }
        if (i == 6) {
            images[i].classList.add("farRight");

        }
    }
}


function goRight() {
    state = state + 1;
    if (state > 4) {
        return;
    } else {
        goneLeft(state + 1);
        makeFarLeft(state + 2);
        makeLeft(state + 3);
        makeMiddle(state + 4);
        makeRight(state + 5);
        makeFarRight(state + 6);
        goneRight(state + 7);
    }
}

function goLeft() {
    state = state - 1;
    goneLeft(state + 1);
    makeFarLeft(state + 2);
    makeLeft(state + 3);
    makeMiddle(state + 4);
    makeRight(state + 5);
    makeFarRight(state + 6);
    goneRight(state + 7);
}

setUp();
document.querySelector(".buttonright").addEventListener("click", goRight);
document.querySelector(".buttonleft").addEventListener("click", goLeft);



document.addEventListener("keydown", function (e) {
    if (e.keyCode == 37) {
        goLeft();
    }
    if (e.keyCode == 39) {
        goRight();
    }
}, false);

document.addEventListener("keydown", function (e) {
    console.log(e.keyCode);
}, false);
