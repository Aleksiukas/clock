"use strict"

const DOMhours_minutes = document.querySelector('.clock');

let HTML2= '';

for (let h=0; h<24; h++) {
    let hours = h;
    if (hours <10) {
    hours = '0' + hours;
    }

    for (let m=0; m<60; m++) {
        let minutes = m;
        if (minutes <10) {
        minutes = '0' + minutes;
        }                
            HTML2 += `<div class="time">${hours}:${minutes}:00</div>`;
    } 
}
    DOMhours_minutes.innerHTML=HTML2;    