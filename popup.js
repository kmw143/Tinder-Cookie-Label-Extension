console.log("This is a popup!")

document.addEventListener("DOMContentLoaded", function () {
    // Existing link click handlers...
    document.querySelectorAll(".link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent card flip
            const targetId = this.getAttribute("data-target"); // Get target ID
            const hiddenDiv = document.getElementById(targetId);
            
            // Toggle visibility of the hidden div
            hiddenDiv.style.display = hiddenDiv.style.display === "block" ? "none" : "block";
        });
    });

    // Add close button functionality
    document.querySelectorAll(".close-button").forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent card flip
            this.closest('.hidden-div').style.display = "none"; // Hide the div
        });
    });

    // Existing card click handlers...
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });
});
