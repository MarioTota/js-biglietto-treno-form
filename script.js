var fasceArray = ["minorenne", "maggiorenne", "over65"];
var impostaVisibilita = document.getElementById("biglietto");
var impostaInvisibilita = document.getElementById("biglietto");
impostaInvisibilita.className = "hidden";
document.getElementById("eta").value = "";

var conseguenzeClickGenera = document.getElementById("genera");
conseguenzeClickGenera.addEventListener('click',

  function() {
    var nomeCognome = document.getElementById("nome").value;
    var kmDaPercorrere = document.getElementById("km").value;
    var fasciaEta = document.getElementById("eta").value;

    var costoBiglietto = kmDaPercorrere * 0.21;
    var costoBigliettoMinor = costoBiglietto - ((costoBiglietto * 20) / 100);
    costoBigliettoMinor = costoBigliettoMinor.toFixed(2);
    var costoBigliettoAnziani = costoBiglietto - ((costoBiglietto * 40) / 100);
    costoBigliettoAnziani = costoBigliettoAnziani.toFixed(2);

    // stampa i numeri random
    var numeroCarrozza = Math.floor(Math.random() * 10);
    document.getElementById("carrozza").innerHTML = numeroCarrozza;
    var codiceTreno = Math.floor(Math.random() * 10000) + 90000;
    document.getElementById("codicetreno").innerHTML = codiceTreno;
    // /stampa i numeri random

    // stampa il nome e il cognome
    document.getElementById('spazionomepasseggero').innerHTML=nomeCognome;
    // /stampa il nome e il cognome

    // calcola il prezzo del biglietto in base all'eà
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
    // /calcola il prezzo del biglietto in base all'eà

    // controlli sui valori inseriti
    if (nomeCognome == "" || kmDaPercorrere == "" || fasciaEta == "" ) {
      window.alert("Devi compilare tutti i campi");
      impostaInvisibilita.className = "hidden";
      } else {
        impostaVisibilita.className = "visible";
    }
    if (!isNaN(nomeCognome) || isNaN(kmDaPercorrere) ) {
      window.alert("Nome Cognome : sono ammesse solo lettere\nKm da percorrere: sono ammessi solo numeri");
      impostaInvisibilita.className = "hidden";
    }
    // /controlli sui valori inseriti

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
