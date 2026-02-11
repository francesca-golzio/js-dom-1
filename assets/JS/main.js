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

btnEl.addEventListener('click', function() {  

  const buttonLabel = btnEl.innerHTML;
  console.log(buttonLabel);

  /* Switch on 💡 */
  if(buttonLabel === 'Accendi') {
    
    /* changes to button 🔘 */
    btnEl.innerHTML = 'Spegni';
    
    /* changes to bulb img 🖼️ */
    bulbImgEl.style.transition = 'all 2s';
    bulbImgEl.src = './assets/img/yellow_lamp.png';
    bulbImgEl.alt = 'lampadina accesa';
  }
  
  /* Switch off 📴 */
  if(buttonLabel === 'Spegni') {    

    /* changes to button 🔘 */
    btnEl.innerHTML = 'Accendi';

    /* changes to bulb img 🖼️ */    
    bulbImgEl.style.transition = 'all 2s';
    bulbImgEl.src = './assets/img/white_lamp.png';
    bulbImgEl.alt = 'lampadina spenta';
  }

})











