"use strict"

const DOMhours = document.querySelector('.clock');

let HTML3= '';

for (let h=0; h<24; h++) {
    let hours = h;
    if (hours <10) {
    hours = '0' + hours;
    }
            HTML3 += `<div class="time">${hours}:00:00</div>`;
    } 
    DOMhours.innerHTML=HTML3;    