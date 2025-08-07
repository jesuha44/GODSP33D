const canvas = document.getElementById("lightning-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawMainBolt(startX, startY, segments, width = 3, color = "#00ffff") {
  let x = startX;
  let y = startY;

  ctx.beginPath();
  ctx.moveTo(x, y);

  for (let i = 0; i < segments; i++) {
    let xOffset = (Math.random() - 0.5) * 40;
    let yOffset = canvas.height / segments;
    x += xOffset;
    y += yOffset;
    ctx.lineTo(x, y);

    // draw branch randomly
    if (Math.random() > 0.8 && i < segments - 2) {
      drawBranch(x, y, 4);
    }
  }

  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.shadowColor = "#0ff";
  ctx.shadowBlur = 30;
  ctx.stroke();
}

function drawBranch(x, y, depth) {
  if (depth === 0) return;

  const branchAngle = (Math.random() - 0.5) * Math.PI;
  const length = Math.random() * 60 + 20;

  const x2 = x + length * Math.cos(branchAngle);
  const y2 = y + length * Math.sin(branchAngle);

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = "#00ccff";
  ctx.lineWidth = 1.5;
  ctx.shadowColor = "#0ff";
  ctx.shadowBlur = 20;
  ctx.stroke();

  if (Math.random() > 0.5) {
    drawBranch(x2, y2, depth - 1);
  }
}

function strikeLightning() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMainBolt(canvas.width / 2, 0, 25, 4, "#00f6ff");
}

setTimeout(() => {
  strikeLightning();
}, 100);

setTimeout(() => {
  canvas.style.display = "none";
  document.getElementById("main-content").style.display = "block";
}, 2000);
