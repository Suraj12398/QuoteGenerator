document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("content-form");
    const categoryInput = document.getElementById("category");
    const contentDisplay = document.getElementById("content-display");




    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const category = categoryInput.value.trim();

        // Validate input
        if (!category) {
            alert("Please enter a category.");
            return;
        }

        // Make a GET request to your API endpoint
        fetch(`http://localhost:8080/bot/chat?prompt=Give me one quote about ${encodeURIComponent(category)}`)
            .then((response) => response.json())
            .then((data) => {
                // Display the generated content
                contentDisplay.innerHTML = data.content;
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                alert("An error occurred while fetching data.");
            });
    });
});
