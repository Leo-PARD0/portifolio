// Dark Mode
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Efeito de digitação
const typing = document.querySelector(".typing");
const text = "Alterando informações";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Scroll reveal
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let r of reveals) {
    let windowHeight = window.innerHeight;
    let elementTop = r.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      r.classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// ===== EFEITO TILT NOS CARDS =====
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 6;
    const rotateX = ((midY - y) / midY) * 6;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

