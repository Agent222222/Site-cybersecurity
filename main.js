document.addEventListener("DOMContentLoaded", function () {
  const slider = new ChiefSlider(".slider", {
    loop: false,
  });
});


const seven = document.querySelector(".big-seven");
const six = document.querySelector(".big-six");
const five = document.querySelector(".big-five");
const title = document.querySelector(".main");
const titleoff = document.querySelector(".big-three");
const shavucha = document.querySelector(".big-one-first");
const toogle = document.querySelector(".bottom1");

five.classList.add("visually-hidden");
six.classList.add("visually-hidden");
seven.classList.add("visually-hidden");

toogle.addEventListener("click", function (event) {
shavucha.classList.remove("visually-hidden");
title.classList.remove("main-2");
titleoff.classList.remove("visually-hidden");
five.classList.add("visually-hidden");
six.classList.add("visually-hidden");
seven.classList.add("visually-hidden");

});

const toog = document.querySelector(".bottom2");
toog.addEventListener("click", function (event) {
  shavucha.classList.add("visually-hidden");
  title.classList.add("main-2");
  titleoff.classList.add("visually-hidden");
  five.classList.add("visually-hidden");
  six.classList.add("visually-hidden");
  seven.classList.remove("visually-hidden");
});

const tole = document.querySelector(".bottom3");
tole.addEventListener("click", function (event) {
  shavucha.classList.add("visually-hidden");
  title.classList.add("main-2");
  titleoff.classList.add("visually-hidden");
  five.classList.add("visually-hidden");
  six.classList.remove("visually-hidden");
  seven.classList.add("visually-hidden");
});

const ogle = document.querySelector(".bottom4");
ogle.addEventListener("click", function (event) {
  shavucha.classList.add("visually-hidden");
  title.classList.add("main-2");
  titleoff.classList.add("visually-hidden");
  five.classList.remove("visually-hidden");
  six.classList.add("visually-hidden");
  seven.classList.add("visually-hidden");
});
