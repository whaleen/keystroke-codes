// keystoke.js
//

// esc - clears any visable
function escKeyPressed() {
    $("section").addClass("hidden");
    $("section#instruction").removeClass("hidden");

}

// a-z

// a
function aKeyPressed() {
    $("section").addClass("hidden");
    $("section#aKey").removeClass("hidden");
}
// b
function bKeyPressed() {
    $("section").addClass("hidden");
    $("section#bKey").removeClass("hidden");
}

// c
function cKeyPressed() {
    $("section").addClass("hidden");
    $("section#cKey").removeClass("hidden");
}

// d
function dKeyPressed() {
    $("section").addClass("hidden");
    $("section#dKey").removeClass("hidden");
}

// e
function eKeyPressed() {
    $("section").addClass("hidden");
    $("section#eKey").removeClass("hidden");
}
// f
function fKeyPressed() {
    $("section").addClass("hidden");
    $("section#fKey").removeClass("hidden");
}


// g
function gKeyPressed() {
    $("section").addClass("hidden");
    $("section#gKey").removeClass("hidden");
}

// h
function hKeyPressed() {
    $("section").addClass("hidden");
    $("section#hKey").removeClass("hidden");
}

// i
function iKeyPressed() {
    $("section").addClass("hidden");
    $("section#iKey").removeClass("hidden");
}
// j
function jKeyPressed() {
    $("section").addClass("hidden");
    $("section#jKey").removeClass("hidden");
}

// k
function kKeyPressed() {
    $("section").addClass("hidden");
    $("section#kKey").removeClass("hidden");
}

// l
function lKeyPressed() {
    $("section").addClass("hidden");
    $("section#lKey").removeClass("hidden");
}

// m
function mKeyPressed() {
    $("section").addClass("hidden");
    $("section#mKey").removeClass("hidden");
}
// n
function nKeyPressed() {
    $("section").addClass("hidden");
    $("section#nKey").removeClass("hidden");
}

// o
function oKeyPressed() {
    $("section").addClass("hidden");
    $("section#oKey").removeClass("hidden");
}

// p
function pKeyPressed() {
    $("section").addClass("hidden");
    $("section#pKey").removeClass("hidden");
}

// q
function qKeyPressed() {
    $("section").addClass("hidden");
    $("section#qKey").removeClass("hidden");
}
// r
function rKeyPressed() {
    $("section").addClass("hidden");
    $("section#rKey").removeClass("hidden");
}

// s
function sKeyPressed() {
    $("section").addClass("hidden");
    $("section#sKey").removeClass("hidden");
}

// t
function tKeyPressed() {
    $("section").addClass("hidden");
    $("section#tKey").removeClass("hidden");
}

// u
function uKeyPressed() {
    $("section").addClass("hidden");
    $("section#uKey").removeClass("hidden");
}
// v
function vKeyPressed() {
    $("section").addClass("hidden");
    $("section#vKey").removeClass("hidden");
}

// w
function wKeyPressed() {
    $("section").addClass("hidden");
    $("section#wKey").removeClass("hidden");
}

// x
function xKeyPressed() {
    $("section").addClass("hidden");
    $("section#xKey").removeClass("hidden");
}

// y
function yKeyPressed() {
    $("section").addClass("hidden");
    $("section#yKey").removeClass("hidden");
}

// z
function zKeyPressed() {
    $("section").addClass("hidden");
    $("section#zKey").removeClass("hidden");
}


// 0
function zeroKeyPressed() {
    $("section").addClass("hidden");
    $("section#zeroKey").removeClass("hidden");
}


// 1
function oneKeyPressed() {
    $("section").addClass("hidden");
    $("section#oneKey").removeClass("hidden");
}

// 2
function twoKeyPressed() {
    $("section").addClass("hidden");
    $("section#twoKey").removeClass("hidden");
}

// 3
function threeKeyPressed() {
    $("section").addClass("hidden");
    $("section#threeKey").removeClass("hidden");
}
// 4
function fourKeyPressed() {
    $("section").addClass("hidden");
    $("section#fourKey").removeClass("hidden");
}

// 5
function fiveKeyPressed() {
    $("section").addClass("hidden");
    $("section#fiveKey").removeClass("hidden");
}

// 6
function sixKeyPressed() {
    $("section").addClass("hidden");
    $("section#sixKey").removeClass("hidden");
}

// 7
function sevenKeyPressed() {
    $("section").addClass("hidden");
    $("section#sevenKey").removeClass("hidden");
}

// 8
function eightKeyPressed() {
    $("section").addClass("hidden");
    $("section#eightKey").removeClass("hidden");
}

// 9
function nineKeyPressed() {
    $("section").addClass("hidden");
    $("section#nineKey").removeClass("hidden");
}

//
document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 65: // a
            aKeyPressed();
            break;
        case 66: // b
            bKeyPressed();
            break;
        case 67: // c
            cKeyPressed();
            break;
        case 68: // d
            dKeyPressed();
            break;
        case 69: // e
            eKeyPressed();
            break;
        case 70: // f
            fKeyPressed();
            break;
        case 71: // g
            gKeyPressed();
            break;
        case 72: // h
            hKeyPressed();
            break;
        case 73: // i
            iKeyPressed();
            break;
        case 74: // j
            jKeyPressed();
            break;
        case 75: // k
            kKeyPressed();
            break;
        case 76: // l
            lKeyPressed();
            break;
        case 77: // m
            mKeyPressed();
            break;
        case 78: // n
            nKeyPressed();
            break;
        case 79: // o
            oKeyPressed();
            break;
        case 80: // p
            pKeyPressed();
            break;
        case 81: // q
            qKeyPressed();
            break;
        case 82: // r
            rKeyPressed();
            break;
        case 83: // s
            sKeyPressed();
            break;
        case 84: // t
            tKeyPressed();
            break;
        case 85: // u
            uKeyPressed();
            break;
        case 86: // v
            vKeyPressed();
            break;
        case 87: // w
            wKeyPressed();
            break;
        case 88: // x
            xKeyPressed();
            break;
        case 89: // y
            yKeyPressed();
            break;
        case 90: // z
            zKeyPressed();
            break;
        case 48: // 0
            zeroKeyPressed();
            break;
        case 49: // 1
            oneKeyPressed();
            break;
        case 50: // 2
            twoKeyPressed();
            break;
        case 51: // 3
            threeKeyPressed();
            break;
        case 52: // 4
            fourKeyPressed();
            break;
        case 53: // 5
            fiveKeyPressed();
            break;
        case 54: // 6
            sixKeyPressed();
            break;
        case 55: // 7
            sevenKeyPressed();
            break;
        case 56: // 8
            eightKeyPressed();
            break;
        case 57: // 9
            nineKeyPressed();
            break;
        case 27: // esc - clears all visable
            escKeyPressed();
            break;
    }
};
