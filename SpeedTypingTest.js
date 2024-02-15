let timerE1 = document.getElementById("timer");
let quoteDisplayE1 = document.getElementById("quoteDisplay");
let resultE1 = document.getElementById("result");
let quoteInputE1 = document.getElementById("quoteInput");
let submitBtnE1 = document.getElementById("submitBtn");
let resetBtnE1 = document.getElementById("resetBtn");
let spinnerE1 = document.getElementById("spinner");

let timer = 0;
let timerId = setInterval(function() {
    timer += 1;
    timerE1.textContent = timer;
}, 1000);
let options = {
    method: "GET",
}
spinnerE1.classList.remove("d-none");
let uRL = "https://apis.ccbp.in/random-quote";
fetch(uRL, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        spinnerE1.classList.add("d-none");
        quoteDisplayE1.textContent = jsonData.content;
        quoteDisplayE1.classList.add("quote-display");

    });

function submitFunction() {
    let quoteInputValue = quoteInputE1.value;
    let quoteDisplayValue = quoteDisplayE1.textContent;
    if (quoteInputValue === quoteDisplayValue) {
        resultE1.textContent = "You typed in " + timer + " seconds";
        clearInterval(timerId);
    } else {
        resultE1.textContent = "You typed incorrect sentence";
    }
    console.log(quoteInputValue);
    console.log(quoteDisplayValue);
}

submitBtnE1.addEventListener("click", submitFunction);

resetBtnE1.addEventListener("click", function() {
    quoteInputE1.value = "";
    resultE1.textContent = "";
    timerE1.textContent = "";
});