console.log("This is a popup!")

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });
});