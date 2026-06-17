function showLetter() {

    const letter = document.getElementById("letter");

    if (!letter) return;

    if (letter.style.display === "none" || letter.style.display === "") {

        letter.style.display = "block";

    } else {

        letter.style.display = "none";

    }
}


function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}

setInterval(createHeart, 500);

document.getElementById("playBtn").addEventListener("click", () => {
    document.getElementById("player").innerHTML = `
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/5gwy0gcjIkI?autoplay=1"
        allow="autoplay"
        frameborder="0">
      </iframe>
    `;
});
