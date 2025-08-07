const canvas = document.getElementById("lightningCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawLightning() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let x = canvas.width / 2;
  let y = 0;

  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x, y);

  for (let i = 0; i < 20; i++) {
    x += (Math.random() - 0.5) * 40;
    y += canvas.height / 20;
    ctx.lineTo(x, y);
  }

  ctx.stroke();
}

setTimeout(() => {
  drawLightning(); // Show lightning bolt
}, 200);

setTimeout(() => {
  document.getElementById("flash-overlay").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  canvas.style.display = "none";
}, 1200);
