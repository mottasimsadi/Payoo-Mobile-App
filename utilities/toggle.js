// Using Reusable Function

handleToggle("cash-out", "none");
handleToggle("transaction-history", "none");

document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("add-money", "block");
  handleToggle("cash-out", "none");
  handleToggle("transaction-history", "none");
});

document.getElementById("cash-out-box").addEventListener("click", function () {
  handleToggle("add-money", "none");
  handleToggle("cash-out", "block");
  handleToggle("transaction-history", "none");
});

document.getElementById("transaction-box").addEventListener("click", function () {
  handleToggle("add-money", "none");
  handleToggle("cash-out", "none");
  handleToggle("transaction-history", "block");
});

function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
