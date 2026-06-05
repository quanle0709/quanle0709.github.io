const button = document.getElementById("celebrateBtn");

button.addEventListener("click", () => {

    alert("🎉 Chúc mừng bé cún tròn 10 ngày tuổi! ❤️");

    for (let i = 0; i < 40; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 2 + 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}