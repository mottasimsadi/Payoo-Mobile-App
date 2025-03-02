document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // const amount = document.getElementById("amount-number").value;
    // const convertedAmount = parseFloat(amount);

    // const pin = document.getElementById("pin-number").value;
    // const convertedPin = parseInt(pin);

    // const mainBalance = document.getElementById("main-balance").innerText;
    // const convertedMainBalance = parseFloat(mainBalance);

    // if (amount && pin) {
    //   if (convertedPin === 1234) {
    //     const sum = convertedMainBalance + convertedAmount;
    //     document.getElementById("main-balance").innerText = sum;
    //   } else {
    //     alert("Enter valid pin");
    //   }
    // } else {
    //   alert("Enter both amount & pin");
    // }

    // Using Reusable Function
    const amount = getInputValueById("amount-number");

    const pin = getInputValueById("pin-number");

    const mobile = document.getElementById("mobile-number").value;

    const mainBalance = getInnerTextById("main-balance");

    if (amount && pin) {
      if (mobile.length === 11) {
        if (pin === 1234) {
          const sum = mainBalance + amount;
          setInnerTextByIdAndValue("main-balance", sum);
        } else {
          alert("Enter valid pin");
        }
      } else {
        alert("Need Valid Mobile Number");
      }
    } else {
      alert("Enter both Amount & Pin");
    }
  });
