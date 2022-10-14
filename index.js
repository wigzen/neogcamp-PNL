const initialPrice = document.getElementById("init")
const quantityStocks = document.getElementById("stock")
const currentPrice =document.getElementById("current")
const outputEl = document.getElementById("output")
const submitBtn = document.getElementById("btn")


function calculateProfitOrLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / (initial * quantity)) * 100;
    showOutput(
      "Your loss is " +
        loss.toFixed(2) +
        " and the loss percentage is " +
        lossPercentage.toFixed(2) +
        " % 🤕"
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / (initial * quantity)) * 100;
    showOutput(
      "Your profit is " +
        profit.toFixed(2) +
        " and the profit percentage is " +
        profitPercentage.toFixed(2) +
        " % 💸"
    );
  } else {
    showOutput("No pain no gain but also no gain no pain!");
  }
}

function submitHandler(ip, qty, curr) {
  var ip = Number(initialPrice.value);
  var qty = Number(quantityStocks.value);
  var curr = Number(currentPrice.value);
  calculateProfitOrLoss(ip, qty, curr);

  if (ip <= 0 || qty <= 0 || curr <= -1) {
    showOutput("Enter Valid Data❌");
  }
}

function showOutput(message) {
  outputEl.innerText = message;
}
submitBtn.addEventListener("click", submitHandler);
