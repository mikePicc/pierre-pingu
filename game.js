// Get canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
let player = {
    x: 50,
    y: 50,
    size: 20,
    color: 'blue'
};


let speed = 5;

// 1 = wall; 0 = available path
const gameBoard = [ 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//each tile is 32x32 pixels, allowing for that classic pac-man grid layout 
const tileSize = 32;


// Listen for keyboard events
document.addEventListener('keydown', movePlayer);


function drawBoard(){ 
    for(let row = 0; row < gameBoard.length; row++){ 
        for (let col = 0; col < gameBoard[row].length; col++) { 
            if (gameBoard[row][col] == 1) { 
                // Draw the walls 
                ctx.fillStyle = 'blue';
                ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);

            } else { 
                // Draw the Paths 
                ctx.fillStyle = 'black';
                ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);

                // Draw the edible dots lol
                ctx.fillStyle = 'white';
                ctx.beginPath();
                ctx.arc(col * tileSize + tileSize / 2, row * tileSize + tileSize / 2, 4, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
}




function movePlayer(event) {
    switch(event.key) {
        case 'ArrowUp':
            player.y -= speed;
            break;
        case 'ArrowDown':
            player.y += speed;
            break;
        case 'ArrowLeft':
            player.x -= speed;
            break;
        case 'ArrowRight':
            player.x += speed;
            break;
    }
    drawPlayer();
}

// Draw the player
function drawPlayer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);
}





// Initial draw
drawPlayer();