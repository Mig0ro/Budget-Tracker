document.body.style.backgroundColor = "#141313ff";

let total = 0;
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total");
let salary = 0;
const salaryInput = document.getElementById("salary-input");
const setSalaryBtn = document.getElementById("set-salary");
const netPayDisplay = document.getElementById("net-pay");
const categoryTotals = {
  Food: 0,
  Rent: 0,
  Entertainment: 0,
  Utilities: 0,
  Other: 0
};





setSalaryBtn.addEventListener("click", function () {
  salary = parseFloat(salaryInput.value) || 0;
  updateNetPay();
});
function updateNetPay() {
  const netPay = salary - total;
  netPayDisplay.textContent = `Net Pay: $${netPay.toFixed(2)}`;
}

const resetBtn = document.getElementById("reset-btn")
resetBtn.addEventListener("click", function () {
  // Reset total and category totals
  total = 0;
  salary = 0;
  expenseList.innerHTML = "";
  categoryTotals['Food'] = 0;
  categoryTotals['Rent'] = 0;
  categoryTotals['Entertainment'] = 0;  
  categoryTotals['Utilities'] = 0;
  categoryTotals['Other'] = 0;
  salaryInput.value = '';
  netPayDisplay.textContent = "Net Pay: $0.00";
  totalDisplay.textContent = "0.00";
    expenseChart.data.datasets[0].data = [
      categoryTotals['Food'],
      categoryTotals['Rent'],
      categoryTotals['Entertainment'],
      categoryTotals['Utilities'],
      categoryTotals['Other']
    ];
  });



expenseForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("expense-name").value;
  const amount = parseFloat(document.getElementById("expense-amount").value);
  const category = document.getElementById("expense-category").value;
  categoryTotals[category] += amount;

  expenseChart.data.datasets[0].data = [
    categoryTotals['Food'],
    categoryTotals['Rent'],
    categoryTotals['Entertainment'],
    categoryTotals['Utilities'],
    categoryTotals['Other']

]
  expenseChart.update();

  const li = document.createElement("li");
  li.textContent = `${name} - $${amount.toFixed(2)} (${category})`;
  expenseList.appendChild(li);

  total += amount;
  totalDisplay.textContent = total.toFixed(2);
  updateNetPay();

  // Reset form
  expenseForm.reset();
});

const data = {
  labels: ['Food', 'Rent', 'Utilities', 'Entertainment', 'Other'],
  datasets: [
    {
      label: 'Expenses',
      data: [20, 30, 15, 25, 10],
      backgroundColor: ['FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
    }
  ]
};

const config = {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Pie Chart'
      }
    }
  },
};

const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const expenseChart = new Chart(document.getElementById('expenseChart'), config);