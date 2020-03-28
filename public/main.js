(function gettingNewQuote() {
  fetch('/quote')
  .then(r => r.json())
  .then(data => {
    document.getElementById('quote').innerText = data.quote;
  });
  setTimeout(gettingNewQuote, 2000);
})();



