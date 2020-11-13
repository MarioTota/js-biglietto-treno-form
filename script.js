var nomeCognome = document.getElementById("nome").value;
console.log(nomeCognome);

var kmDaPercorrere = document.getElementById("km").value;
console.log(kmDaPercorrere);

var fasciaEta = document.getElementById("eta").value;
console.log(fasciaEta);

var costoBiglietto = kmDaPercorrere * 0.21;
console.log("costo ordinario ", costoBiglietto)

var costoBigliettoMinor = costoBiglietto - ((costoBiglietto * 20) / 100);
costoBigliettoMinor = costoBigliettoMinor.toFixed(2);
console.log("costo per i minorenni ", costoBigliettoMinor)

var costoBigliettoanziani = costoBiglietto - ((costoBiglietto * 40) / 100);
costoBigliettoanziani = costoBigliettoanziani.toFixed(2);
console.log("costo per gli anziani ", costoBigliettoanziani)

// var minorenne = document.getElementById("minorenne");
// var maggiorenne = document.getElementById("maggiorenne");
// var over65 = document.getElementById("over65");


var fasceArray = ["minorenne", "maggiorenne", "over65"];

var element = document.getElementById("genera");
element.addEventListener('click',

  function() {
    document.getElementById('spazionomepasseggero').innerHTML=nomeCognome;

    if (fasciaEta == fasceArray[0]) {
      document.getElementById('spazioofferta').innerHTML="Offerta minorenni";
      document.getElementById('spaziocostobiglietto').innerHTML="&euro; " + costoBigliettoMinor;

    if (fasciaEta == fasceArray[1]) {
      document.getElementById('spazioofferta').innerHTML="biglietto ordinario";
      document.getElementById('spaziocostobiglietto').innerHTML="&euro; " + costoBiglietto;
    }

    // if(fasciaEta = over65) {
    //   document.getElementById('spazioofferta').innerHTML="Offerta over65";
    //   document.getElementById('spaziocostobiglietto').innerHTML="&euro; " + costoBigliettoanziani;
    // }
    //
    // if(fasciaEta = maggiorenne) {
    //   document.getElementById('spaziocostobiglietto').innerHTML="&euro; " + costoBiglietto;
    //   document.getElementById('spazioofferta').innerHTML="Biglietto ordinario";
    // }
    }
  }
);
