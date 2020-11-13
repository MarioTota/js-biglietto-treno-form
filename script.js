var nomeCognome = document.getElementById("nome").value;
console.log(nomeCognome);

var kmDaPercorrere = document.getElementById("km").value;
console.log(kmDaPercorrere);

var fasciaEta = document.getElementById("eta").value;
console.log(fasciaEta);

var costoBiglietto = kmDaPercorrere * 0.21;
console.log(costoBiglietto);

var costoBigliettoMinor = costoBiglietto - ((costoBiglietto * 20) / 100);
costoBigliettoMinor = costoBigliettoMinor.toFixed(2);

var costoBigliettoanziani = costoBiglietto - ((costoBiglietto * 40) / 100);
costoBigliettoanziani = costoBigliettoanziani.toFixed(2);

var element = document.getElementById("genera");
element.addEventListener('click',

  function() {
    // document.getElementById('costobiglietto').innerHTML="&euro; " + costoBiglietto;
    if (fasciaEta === minorenne) {
      document.getElementById('costobiglietto').innerHTML="&euro; " + costoBigliettoMinor;
    } else if(fasciaEta === over65) {
      document.getElementById('costobiglietto').innerHTML="&euro; " + costoBigliettoanziani;
    }

  }
);
