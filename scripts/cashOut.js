document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // const amount = document.getElementById("cash-out-amount-number").value;
    // const convertedAmount = parseFloat(amount);

    // const pin = document.getElementById("cash-out-pin-number").value;
    // const convertedPin = parseInt(pin);

    // const mainBalance = document.getElementById("main-balance").innerText;
    // const convertedMainBalance = parseFloat(mainBalance);

    // if (amount && pin) {
    //   if (convertedPin === 1234) {
    //     const total = convertedMainBalance - convertedAmount;
    //     document.getElementById("main-balance").innerText = total;
    //   } else {
    //     alert("Enter valid pin");
    //   }
    // } else {
    //   alert("Enter both amount & pin");
    // }

    // Using Reusable Function
    const amount = getInputValueById("cash-out-amount-number");

    const pin = getInputValueById("cash-out-pin-number");

    const mobile = document.getElementById("cash-out-mobile-number").value;

    const mainBalance = getInnerTextById("main-balance");

    if (amount && pin) {
      if (mobile.length === 11) {
        if (pin === 1234) {
          const total = mainBalance - amount;
          setInnerTextByIdAndValue("main-balance", total);
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
