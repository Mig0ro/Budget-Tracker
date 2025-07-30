let total = 0;
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total");

expenseForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("expense-name").value;
  const amount = parseFloat(document.getElementById("expense-amount").value);
  const category = document.getElementById("expense-category").value;

  const li = document.createElement("li");
  li.textContent = `${name} - $${amount.toFixed(2)} (${category})`;
  expenseList.appendChild(li);

  total += amount;
  totalDisplay.textContent = total.toFixed(2);

  // Reset form
  expenseForm.reset();
});
