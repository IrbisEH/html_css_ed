'use strict';
import Noise from './Noise.js';

let menuObj = document.getElementById("menu");

menuObj.style.height = window.innerHeight + "px";
menuObj.style.width = window.innerWidth + "px";

const myNoise = new Noise();

window.addEventListener("resize", () => {
    menuObj.style.height = window.innerHeight + "px";
    menuObj.style.width = window.innerWidth + "px";
    myNoise.Reset();
})

