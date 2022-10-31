function reset() {

  const imgArray = document.querySelectorAll("img"); //create array for length of i to loop, could also be put into for loop like i < document.querySelectorAll("img").length
  const randomNumber = []; //empty array to store the randomized numbers

  for(let i = 0; i < imgArray.length; i++) {
    randomNumber[i] = Math.floor(Math.random() * 6) + 1; //create random number for every dice and put into array
    document.querySelectorAll("img")[i].setAttribute("src", "images/dice" + randomNumber[i] + ".png");
  }

  randomNumber[0] > randomNumber[1] && randomNumber[0] > randomNumber[2]? document.querySelector("h1").textContent = "Player 1 wins"
  : randomNumber[1] > randomNumber[0] && randomNumber[1] > randomNumber[2] ? document.querySelector("h1").textContent = "Player 2 wins"
  : randomNumber[2] > randomNumber[0] && randomNumber[2] > randomNumber[1] ? document.querySelector("h1").textContent = "Player 3 wins"
  : randomNumber[0] == randomNumber[1] && randomNumber[0] == randomNumber[2] ? document.querySelector("h1").textContent = "Draw"
  : document.querySelector("h1").textContent = "No winner"
}

// function reset() { //version1
//   const numberDice1 = Math.floor(Math.random() * 6) + 1;
//   const numberDice2 = Math.floor(Math.random() * 6) + 1;
//
//   document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + numberDice1 + ".png");
//   document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + numberDice2 + ".png");
//
//   if(numberDice1 > numberDice2) {
//     document.querySelector("h1").textContent = "Player 1 wins";
//   }
//   else if(numberDice1 < numberDice2) {
//     document.querySelector("h1").textContent = "Player 2 wins";
//   }
//   else {
//     document.querySelector("h1").textContent = "Draw";
//   }
// }

//Ternary operator
// numberDice1 > numberDice2 ? document.querySelector("h1").textContent = "Player 1 wins" : console.log("nix")
// : numberDice1 < numberDice2 ? document.querySelector("h1").textContent = "Player 2 wins"
// : document.querySelector("h1").textContent = "Draw"
