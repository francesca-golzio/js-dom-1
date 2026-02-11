/* is it working? */
console.log("🟢 it's working...")

/* Collect */
const bulbImgEl = document.getElementById('bulbImg');
const btnEl = document.getElementById('btn');

//console.log(bulbEl, btnEl);

/* Switch on 💡 */

btnEl.addEventListener('click', function() {



//const bulbProperties = bulbImgEl.classList;
//console.log(bulbProperties);
bulbImgEl.src = './assets/img/yellow_lamp.png';
bulbImgEl.alt = 'lampadina accesa';
//bulbImgEl.style.transformOrigin = '-1 0'; //NON funziona...

})
















