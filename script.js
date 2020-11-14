var fasceArray = ["minorenne", "maggiorenne", "over65"];
var impostaVisibilita = document.getElementById("biglietto");
var impostaInvisibilita = document.getElementById("biglietto");
impostaInvisibilita.className = "hidden";
document.getElementById("eta").value = "";
var conseguenzeClickGenera = document.getElementById("genera");
conseguenzeClickGenera.addEventListener('click',

  function() {
    var fasciaEta = document.getElementById("eta").value;
    var nomeCognome = document.getElementById("nome").value;
    var kmDaPercorrere = document.getElementById("km").value;

    var costoBiglietto = kmDaPercorrere * 0.21;
    var costoBigliettoMinor = costoBiglietto - ((costoBiglietto * 20) / 100);
    costoBigliettoMinor = costoBigliettoMinor.toFixed(2);
    var costoBigliettoAnziani = costoBiglietto - ((costoBiglietto * 40) / 100);
    costoBigliettoAnziani = costoBigliettoAnziani.toFixed(2);

    var numeroCarrozza = Math.floor(Math.random() * 10);
    document.getElementById("carrozza").innerHTML = numeroCarrozza;
    var codiceTreno = Math.floor(Math.random() * 10000) + 90000;
    document.getElementById("codicetreno").innerHTML = codiceTreno;

    document.getElementById('spazionomepasseggero').innerHTML=nomeCognome;

    if (nomeCognome == "") {
      window.alert("Devi inserire Nome e Cognome");
      impostaInvisibilita.className = "hidden";
    } else {
      impostaVisibilita.className = "visible";
    }

    if (fasciaEta == fasceArray[0]) {
      document.getElementById('spazioofferta').innerHTML="Sconto Minorenni";
      document.getElementById('spaziocostobiglietto').innerHTML="&euro; " + costoBigliettoMinor;
    }

    if (fasciaEta == fasceArray[1]) {
      document.getElementById('spazioofferta').innerHTML="Biglietto Ordinario";
      document.getElementById('spaziocostobiglietto').innerHTML="&euro; " + costoBiglietto;
    }

    if (fasciaEta == fasceArray[2]) {
      document.getElementById('spazioofferta').innerHTML="Sconto Over-65";
      document.getElementById('spaziocostobiglietto').innerHTML="&euro; " + costoBigliettoAnziani;
    }

  }
);

var conseguenzeClickAnnulla = document.getElementById("annulla");
conseguenzeClickAnnulla.addEventListener('click',

  function() {
    var nomeCognome = document.getElementById("nome").value;
    var kmDaPercorrere = document.getElementById("km").value;

    document.getElementById('spazionomepasseggero').innerHTML="";
    document.getElementById('spazioofferta').innerHTML="";
    document.getElementById('spaziocostobiglietto').innerHTML="";
    document.getElementById("nome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "";

    document.getElementById("carrozza").innerHTML = "";
    document.getElementById("codicetreno").innerHTML = "";

    impostaInvisibilita.className = "hidden";
  }
);
