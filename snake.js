const board = document.querySelector(".game-board");
const scoreText = document.getElementById("score");

const size = 20;
let cells = [];
let snake = [42, 41];
let direction = 1;
let food = 0;
let score = 0;
let gameInterval;


// Create grid
for (let i = 0; i < size * size; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  board.appendChild(div);
  cells.push(div);
}

// Draw snake
function draw() {
  cells.forEach(cell => cell.classList.remove("snake", "food"));
  snake.forEach(index => cells[index].classList.add("snake"));
  cells[food].classList.add("food");
}

// Generate food
function generateFood() {
  do {
    food = Math.floor(Math.random() * cells.length);
  } while (snake.includes(food));
}

// Move snake
function move() {
  const head = snake[0] + direction;

  // Game over
  if (
    head < 0 ||
    head >= size * size ||
    (direction === 1 && head % size === 0) ||
    (direction === -1 && head % size === size - 1) ||
    snake.includes(head)
  ) {
    clearInterval(gameInterval);
    alert("Game Over! Score: " + score);
    return;
  }

  snake.unshift(head);

  if (head === food) {
    score++;
    scoreText.innerText = "Score: " + score;
    generateFood();
  } else {
    snake.pop();
  }

  draw();
}

// Controls
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight" && direction !== -1) direction = 1;
  if (e.key === "ArrowLeft" && direction !== 1) direction = -1;
  if (e.key === "ArrowUp" && direction !== size) direction = -size;
  if (e.key === "ArrowDown" && direction !== -size) direction = size;
});

// Restart
function restartGame() {
  clearInterval(gameInterval);
  snake = [42, 41];
  direction = 1;
  score = 0;
  scoreText.innerText = "Score: 0";
  generateFood();
  gameInterval = setInterval(move, 200);
}

// Start game
generateFood();
draw();
gameInterval = setInterval(move, 200);
