document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const foundGold = document.querySelector("#found-golds");
  const result = document.querySelector("#result");
  let width = 12;
  let squares = [];
  let isGameOver = false;

  const initialCapital = 500000000; // 초기자본 5억
  const costExp = 100000000; // 클릭당 비용 지수 1억
  const mulExp = 200000000; // 획득 골드당 배수 지수(multiple exponent)
  const goldAmount = 51; // 골드 총량
  let totalCost = 0; // 총비용
  let clickCount = 0; // 유효 클릭 카운트
  let revenue = 0; // 수익
  let profit = 0; // 이익
  let getGold = 0; // 획득 골드수

  //create Board
  function createBoard() {
    foundGold.innerHTML = getGold;

    const basedArray = [
      "gold",
      "gold",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "bomb",
      "bomb",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "bomb",
      "bomb",
    ];

    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("id", i);
      square.classList.add(basedArray[i]);
      grid.appendChild(square);
      squares.push(square);

      //click
      square.addEventListener("click", function (e) {
        click(square);
      });
    }
  }
  createBoard();

  //click on square actions
  function click(square) {
    let currentId = square.id;
    if (isGameOver) return;
    if (square.classList.contains("checked")) return;
    if (square.classList.contains("bomb")) {
      square.innerHTML = "<img src='./img/bomb.png' >";
      square.classList.remove("bomb");
      square.classList.add("checked");
      clickCount++;
    } else {
      square.innerHTML = "<img src='./img/goldbar.png' >";
      square.classList.remove("gold");
      square.classList.add("checked");
      getGold++;
      clickCount++;
      //foundGold.innerHTML = getGold;
    }

    totalCost = costExp * clickCount;
    profit = calProfit() - totalCost;
    foundGold.innerHTML = profit;
    checkForComplete();
  }

  // calculate profit
  function calProfit() {
    let mProfit = 0;

    revenue = getGold * mulExp;
    // 초기자본(5억) + 수익(황금획득갯수 X 2억) - 비용(1억/클릭) = 이익
    // mProfit = initialCapital + getGold * mulExp - totalCost;
    mProfit = initialCapital + revenue;
    return mProfit;
  }

  //check for complate
  function checkForComplete() {
    ///simplified win argument
    if (getGold === goldAmount) {
      result.innerHTML = "Found All";
      isGameOver = true;
    }
  }
});
