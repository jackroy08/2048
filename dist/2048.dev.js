"use strict";

var text1 = "4";
var text2 = "4";
var text3 = "4";
var text4 = "8";
var text5 = "";
var text6 = "";
var text7 = "";
var text8 = "";
var text9 = "";
var text10 = "";
var text11 = "";
var text12 = "";
var text13 = "";
var text14 = "";
var text15 = "";
var text16 = "";
document.getElementById("1").innerHTML = text1;
document.getElementById("2").innerHTML = text2;
document.getElementById("3").innerHTML = text3;
document.getElementById("4").innerHTML = text4;
document.getElementById("startbtn").addEventListener("click", function () {
  return start();
});
document.getElementById("left").addEventListener("click", function () {
  return left();
}); //function start() {
//  let firstpannel=Math.floor(Math.random() * 16) + 1; 
//  console.log(firstpannel);
// displaynumber(firstpannel);
//}

function left() {
  if (text3 == "") {
    text3 = text4;
  }

  console.log(text1, text2, text3, text4);

  if (text2 == "") {
    text2 = text3;
  }

  console.log(text1, text2, text3, text4);

  if (text1 == 0) {
    text1 = text2;
  }

  console.log(text1, text2, text3, text4);

  if (text2 == text1) {
    text1 = text1 * 2;
    text2 = "";
    console.log(text1, text2, text3, text4);

    if (text3 == text4) {
      text3 = text3 * 2;
      text4 = "";
      console.log(text1, text2, text3, text4);
    } else {
      text2 = text3;
      text3 = text4;
      console.log(text1, text2, text3, text4);
    }

    console.log(text1, text2, text3, text4);
    text4 = "";
    console.log(text1, text2, text3, text4);
  } else if (text2 == text3) {
    text2 = text2 * 2;
    text3 = text4;
    text4 = "";
    console.log(text1, text2, text3, text4);
  } else if (text3 == text4) {
    text3 = text3 * 2;
    text4 = "";
  } //////


  if (text3 == "") {
    text3 = text4;
    text4 = "";
  }

  console.log(text1, text2, text3, text4);

  if (text2 == "") {
    text2 = text3;
    text3 = text4;
    text4 = "";
  }

  console.log(text1, text2, text3, text4);

  if (text1 == 0) {
    text1 = text2;
    text2 = text3;
    text3 = text4;
    text4 = "";
  }

  displayrow1();
  console.log(text1, text2, text3, text4);
}

function displayrow1() {
  document.getElementById("1").innerHTML = text1;
  document.getElementById("2").innerHTML = text2;
  document.getElementById("3").innerHTML = text3;
  document.getElementById("4").innerHTML = text4;
}