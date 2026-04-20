const stressButton = document.getElementById("stress-toggle");
const fpsCounter = document.getElementById("fps-counter");

let stressOn = false;

if (stressButton) {
  stressButton.addEventListener("click", () => {
    stressOn = !stressOn;
    document.body.classList.toggle("stress-test", stressOn);
    stressButton.classList.toggle("active", stressOn);
    stressButton.textContent = stressOn ? "Disable stress test" : "Enable stress test";
  });
}

// Simple FPS meter using requestAnimationFrame.
let frameCount = 0;
let prevTime = performance.now();

function fpsLoop(now) {
  frameCount += 1;

  if (now - prevTime >= 500) {
    const fps = Math.round((frameCount * 1000) / (now - prevTime));
    if (fpsCounter) fpsCounter.textContent = `FPS: ${fps}`;
    prevTime = now;
    frameCount = 0;
  }

  requestAnimationFrame(fpsLoop);
}

requestAnimationFrame(fpsLoop);
