const canvas = document.getElementById("lightning-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawLightning(startX, startY, segments, boltWidth = 2, color = "#00f") {
  ctx.beginPath();
  ctx.moveTo(startX, startY);

  let x = startX;
  let y = startY;

  for (let i = 0; i < segments; i++) {
    x += (Math.random() - 0.5) * 40; // randomness in x
    y += canvas.height / segments;
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = color;
  ctx.lineWidth = boltWidth;
  ctx.shadowColor = "#0ff";
  ctx.shadowBlur = 25;
  ctx.stroke();
}

function strike() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawLightning(canvas.width / 2, 0, 20, 3, "#00ffff");
}

setTimeout(() => {
  strike();
}, 100); // strike delay

setTimeout(() => {
  canvas.style.display = "none";
  document.getElementById("main-content").style.display = "block";
}, 1500);
