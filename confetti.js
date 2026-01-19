// Simple confetti effect
const confettiCount = 150;
const colors = ["#ff4d88", "#ffd1dc", "#ffcc00", "#ffffff"];

for (let i = 0; i < confettiCount; i++) {
  const confetti = document.createElement("div");
  confetti.style.position = "fixed";
  confetti.style.width = "8px";
  confetti.style.height = "8px";
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.top = "-10px";
  confetti.style.opacity = Math.random();
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
  confetti.style.borderRadius = "50%";
  confetti.style.zIndex = 9999;

  document.body.appendChild(confetti);

  const fall = confetti.animate([
    { transform: `translateY(0px)` },
    { transform: `translateY(${window.innerHeight + 20}px)` }
  ], {
    duration: 2000 + Math.random() * 3000,
    iterations: Infinity
  });
}
