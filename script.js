const square = document.querySelector(".square");
let squareTop = 0;
let squareLeft = 0;

window.addEventListener("keypress", (event) => {
  console.log(event);
  if (event.key === "s") {
    squareTop += 5;
    square.style.top = `${squareTop}px`;
  } else if (event.key === "w") {
    if (squareTop > 0) {
      squareTop -= 5;
      square.style.top = `${squareTop}px`;
    } else {
      alert("You are on the limit");
    }
  } else if (event.key === "d") {
    squareLeft += 5;
    square.style.left = `${squareLeft}px`;
  } else if (event.key === "a") {
    squareLeft -= 5;
    square.style.left = `${squareLeft}px`;
  }
});
const newSquare = `
    <div class="newSquare"></div>
`;

setInterval(() => {
  document.querySelector("body").innerHTML += newSquare;
}, 2000);
