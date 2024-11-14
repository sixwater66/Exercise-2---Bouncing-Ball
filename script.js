const ball = document.getElementById('ball');
let posX = 100, posY = 100;
let speedX = 2, speedY = 3;

function animateBall() {
    posX += speedX;
    posY += speedY;

    // Check for collisions with the viewport boundaries
    if (posX + ball.clientWidth > window.innerWidth || posX < 0) speedX *= -1;
    if (posY + ball.clientHeight > window.innerHeight || posY < 0) speedY *= -1;

    ball.style.left = `${posX}px`;
    ball.style.top = `${posY}px`;

    requestAnimationFrame(animateBall);
}

animateBall();
