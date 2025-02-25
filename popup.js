console.log("This is a popup!")

document.addEventListener("DOMContentLoaded", function () {
    // Prevent the card from flipping when clicking on the link
    document.querySelectorAll(".link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.stopPropagation(); // Stop event from bubbling to .card
            console.log("You clicked a link!");
            // Add code here to show your hidden div
        });
    });

    // Flip card when clicking anywhere else
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });
});
