/* is it working? */
//console.log("🟢 it's working...")

/* Collect */
const bulbImgEl = document.getElementById('bulbImg');
const btnEl = document.getElementById('btn');


/* Switch on 💡 */

// btnEl.addEventListener('click', function() {

//   /* changes to button 🔘 */
//   //console.log(btnEl.classList);
//   btnEl.innerHTML = 'Spegni';
  
//   /* changes to bulb img 🖼️ */
// //const bulbProperties = bulbImgEl.classList;
// //console.log(bulbProperties);
// bulbImgEl.style.transition = 'all 2s';
// bulbImgEl.src = './assets/img/yellow_lamp.png';
// bulbImgEl.alt = 'lampadina accesa';

// })


/* ⭐ BONUS */ // Senza string.includes() 🤔

/* Set button style */
btnEl.style.backgroundColor = 'yellow';
btnEl.style.color = 'black';
btnEl.style.borderRadius = '30px';

/* Switch 💡 on / off 📴 function */
btnEl.addEventListener('click', function() {  

  const buttonLabel = btnEl.innerHTML;
  //console.log(buttonLabel);

  /* Switch on 💡 */
  if(buttonLabel === 'Accendi') {
    
    /* changes to button 🔘 */
    btnEl.innerHTML = 'Spegni';
    btnEl.style.backgroundColor = 'black';
    btnEl.style.color = 'yellow';
    
    /* changes to bulb img 🖼️ */
    bulbImgEl.style.transition = 'all 2s';
    bulbImgEl.src = './assets/img/yellow_lamp.png';
    bulbImgEl.alt = 'lampadina accesa';
  }
  
  /* Switch off 📴 */
  if(buttonLabel === 'Spegni') {    
    
    /* changes to button 🔘 */
    btnEl.innerHTML = 'Accendi';
    btnEl.style.backgroundColor = 'yellow';
    btnEl.style.color = 'black';

    /* changes to bulb img 🖼️ */    
    bulbImgEl.style.transition = 'all 2s';
    bulbImgEl.src = './assets/img/white_lamp.png';
    bulbImgEl.alt = 'lampadina spenta';
  }

})











