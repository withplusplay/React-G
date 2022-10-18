document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const goldsLeft = document.querySelector("#golds-left");
  const result = document.querySelector("#result");
  let width = 12;
  let goldAmount = 51;
  let squares = [];
  let isGameOver = false;

  //create Board
  function createBoard() {
    goldsLeft.innerHTML = goldAmount;

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
    } else {
      square.innerHTML = "<img src='./img/goldbar.png' >";
      square.classList.remove("gold");
      square.classList.add("checked");
    }
  }

  //check for win
  function checkForWin() {
    ///simplified win argument
    let matches = 0;

    for (let i = 0; i < squares.length; i++) {
      if (
        squares[i].classList.contains("flag") &&
        squares[i].classList.contains("bomb")
      ) {
        matches++;
      }
      if (matches === goldAmount) {
        result.innerHTML = "YOU WIN!";
        isGameOver = true;
      }
    }
  }
});
