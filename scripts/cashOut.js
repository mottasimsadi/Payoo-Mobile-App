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

    if (amount > mainBalance) {
      alert("You can't withdraw money more than you have in the account.");
      return;
    }else if(amount < 0){
      alert("Negative number can not be withdrawable. Use positive number.");
      return;
    }

    if (amount && pin) {
      if (mobile.length === 11) {
        if (pin === 1234) {
          const total = mainBalance - amount;
          setInnerTextByIdAndValue("main-balance", total);

          // Add to Transaction History
          const transactionContainer = document.getElementById(
            "transaction-container"
          );
          const div = document.createElement("div");
          div.classList.add("bg-white", "p-4", "my-4", "shadow", "rounded-lg");
          div.innerHTML = `
                <h4 class="text-xl font-bold">Cash Out</h4>
                <p>Withdraw: ${amount} Tk. New Balance: ${total}</p>
                <p class="text-emerald-400 text-sm">Transaction Date: ${new Date().toLocaleString()}</p>
            `;
          transactionContainer.appendChild(div);
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
