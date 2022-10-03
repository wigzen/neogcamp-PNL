const initailPrice = document.getElementById("init")
const NoOfStocks = document.getElementById("stock")
const currentPrice =document.getElementById("current")
const output = document.getElementById("output")
const button = document.getElementById("btn")


button.addEventListener('click',function(){

    let initial = Number(initailPrice.value);
    let quantity = Number(NoOfStocks.value)
    let current = Number(currentPrice.value)

    calculatePNL(initial,quantity,current);
    }
    )



    function calculatePNL(initial, quantity, current) {
        if (initial > current) {
          let loss = (initial - current) * quantity;
          let lossPercentage = (loss / initial) * 100;
      
          showOutput(
            `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
          );
        } else if (current > initial) {
          let profit = (current - initial) * quantity;
          let profitPercentage = (profit / initial) * 100;
      
          showOutput(
            `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
          );
        } else {
          showOutput(`No pain no gain and no gain no pain`);
        }
      }
      
      function showOutput(message) {
        output.textContent = message;
      }