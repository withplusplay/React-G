document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const totalProfits = document.querySelector("#total-profit");
  const getGolds = document.querySelector("#get-golds");
  const totalClicks = document.querySelector("#total-click");
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
  let totalRevenue = 0; // 총수익
  let totalProfit = 0; // 총이익
  let getGold = 0; // 획득 골드수

  // sound
  let successSound = new Audio("../sound/success.wav");
  let failSound = new Audio("../sound/fail.wav");

  //create Board
  function createBoard() {
    totalProfits.innerHTML = totalProfit;
    getGolds.innerHTML = getGold;
    totalClicks.innerHTML = clickCount;

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
      failSound.play();
      square.innerHTML = "<img src='./img/bomb.png' >";
      square.classList.remove("bomb");
      square.classList.add("checked");
      square.classList.add("vibration");
      setTimeout(function () {
        square.classList.remove("vibration");
      }, 400);
      clickCount++;
    } else {
      successSound.play();
      square.innerHTML = "<img id='gold-light' src='./img/goldbar.png' >";
      square.classList.remove("gold");
      square.classList.add("checked");
      getGold++;
      clickCount++;
      getGolds.innerHTML = getGold;
    }

    totalClicks.innerHTML = clickCount;
    totalCost = costExp * clickCount; // 총 소모 비용
    totalProfit = calRevenue() - totalCost; // 총 이익 계산
    totalProfits.innerHTML = totalProfit.toLocaleString("ko-KR"); // 이익 계산결과 표시
    checkForComplete();
  }

  // calculate profit
  function calRevenue() {
    let mRevenue = 0;

    totalRevenue = getGold * mulExp;
    // 초기자본(5억) + 총수익(황금획득갯수 X 2억) - 총비용(1억*유효클릭수) = 총이익
    // mProfit = initialCapital + totalRevenue(getGold * mulExp) - totalCost;
    mRevenue = initialCapital + totalRevenue;
    return mRevenue;
  }

  //check for complate
  function checkForComplete() {
    ///simplified win argument
    if (getGold === goldAmount) {
      result.innerHTML = "🔘 Found All";
      isGameOver = true;
    }
  }
});
