var fasceArray = ["minorenne", "maggiorenne", "over65"];

var element = document.getElementById("genera");
element.addEventListener('click',

  function() {
    var fasciaEta = document.getElementById("eta").value;
    var nomeCognome = document.getElementById("nome").value;
    var kmDaPercorrere = document.getElementById("km").value;
    var costoBiglietto = kmDaPercorrere * 0.21;
    var costoBigliettoMinor = costoBiglietto - ((costoBiglietto * 20) / 100);
    costoBigliettoMinor = costoBigliettoMinor.toFixed(2);
    var costoBigliettoAnziani = costoBiglietto - ((costoBiglietto * 40) / 100);
    costoBigliettoAnziani = costoBigliettoAnziani.toFixed(2);

    document.getElementById('spazionomepasseggero').innerHTML=nomeCognome;

    if (fasciaEta == fasceArray[0]) {
      document.getElementById('spazioofferta').innerHTML="Offerta minorenni";
      document.getElementById('spaziocostobiglietto').innerHTML="&euro; " + costoBigliettoMinor;
    }

    if (fasciaEta == fasceArray[1]) {
      document.getElementById('spazioofferta').innerHTML="biglietto ordinario";
      document.getElementById('spaziocostobiglietto').innerHTML="&euro; " + costoBiglietto;
    }

    if (fasciaEta == fasceArray[2]) {
      document.getElementById('spazioofferta').innerHTML="offerta over65";
      document.getElementById('spaziocostobiglietto').innerHTML="&euro; " + costoBigliettoAnziani;
    }
  }
);

var elementB = document.getElementById("annulla");
elementB.addEventListener('click',

  function() {
    var nomeCognome = document.getElementById("nome").value;
    var kmDaPercorrere = document.getElementById("km").value;

    document.getElementById('spazionomepasseggero').innerHTML="";
    document.getElementById('spazioofferta').innerHTML="";
    document.getElementById('spaziocostobiglietto').innerHTML="";
    document.getElementById("nome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "maggiorenne";

  }
);
