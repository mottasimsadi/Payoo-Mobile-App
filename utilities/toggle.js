// Using Reusable Function

handleToggle("cash-out", "none");

document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("cash-out", "none");
  handleToggle("add-money", "block");
});

document.getElementById("cash-out-box").addEventListener("click", function () {
  handleToggle("add-money", "none");
  handleToggle("cash-out", "block");
});

function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
