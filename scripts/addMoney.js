document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount-number").value;
    const convertedAmount = parseFloat(amount);

    const pin = document.getElementById("pin-number").value;
    const convertedPin = parseInt(pin);

    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (amount && pin) {
      if (convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;
      } else {
        alert("Enter valid pin");
      }
    } else {
      alert("Enter both amount & pin");
    }
  });
