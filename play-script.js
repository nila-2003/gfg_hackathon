const gameBoard = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");

let score = 0;

// Define game objects and their corresponding environmental messages
const gameObjects = [
    { name: "Recycle", message: "Recycling helps save the environment!" },
    { name: "Plant Trees", message: "Planting trees reduces carbon emissions." },
    { name: "Reduce Water Usage", message: "Conserving water is essential for our planet." },
    // Add more game objects and messages as needed
];

// Function to create a game object element
function createGameObject(object) {
    const gameObject = document.createElement("div");
    gameObject.classList.add("game-object");
    gameObject.innerText = object.name;

    // Attach a click event listener to display the environmental message
    gameObject.addEventListener("click", () => {
        alert(object.message);
        gameObject.style.display = "none"; // Remove the object after clicking
        score += 10; // Increase the score
        scoreDisplay.innerText = `Score: ${score}`;
    });

    return gameObject;
}

// Function to populate the game board with objects
function populateGameBoard() {
    gameBoard.innerHTML = "";
    for (const object of gameObjects) {
        const gameObject = createGameObject(object);
        gameBoard.appendChild(gameObject);
    }
}

// Start the game by populating the game board
populateGameBoard();
