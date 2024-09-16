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

// Listen for keyboard events
document.addEventListener('keydown', movePlayer);

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