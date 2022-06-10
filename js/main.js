var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elSelect = document.querySelector(".js-select");
var elResult = document.querySelector(".js-result");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var elInputVal = elInput.value;
  var elSelectVal = elSelect.value;

  var totalResult = elInputVal * elSelectVal;

  if (elInputVal <= 0) {
    elResult.textContent = "Enter the correct amount";
  } else {
    switch (elSelectVal) {
      case "0.0118":
        elResult.textContent = "Result: " + totalResult + " \u20AC";
        break;
      case "0.000091":
        elResult.textContent = "Result: " + totalResult + " $";
        break;
      case "0.0054":
        elResult.textContent = "Result: " + totalResult + " RUB";
        break;
      default:
        break;
    }
  }
});
