const gameBoard = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");

let score = 0;
const gameObjects = [
    { name: "Recycle", message: "Recycling helps save the environment!" },
    { name: "Plant Trees", message: "Planting trees reduces carbon emissions." },
    { name: "Reduce Water Usage", message: "Conserving water is essential for our planet." },
];
function createGameObject(object) {
    const gameObject = document.createElement("div");
    gameObject.classList.add("game-object");
    gameObject.innerText = object.name;

    gameObject.addEventListener("click", () => {
        alert(object.message);
        gameObject.style.display = "none"; 
        score += 10; 
        scoreDisplay.innerText = `Score: ${score}`;
    });

    return gameObject;
}

function populateGameBoard() {
    gameBoard.innerHTML = "";
    for (const object of gameObjects) {
        const gameObject = createGameObject(object);
        gameBoard.appendChild(gameObject);
    }
}
populateGameBoard();
