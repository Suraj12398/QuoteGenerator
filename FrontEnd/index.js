document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("content-form");
    const categoryInput = document.getElementById("category");
    const contentDisplay = document.getElementById("content-display");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission
  
      const category = categoryInput.value;
      const url = "http://localhost:8080/bot/chat";
      const params = { prompt: `Give me one quote about ${category}` };
  
      // Convert the params object into a URL-encoded query string
      const queryString = Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join("&");
  
      // Append the query string to the URL
      const fullUrl = `${url}?${queryString}`;
  
      // Send the GET request using fetch
      fetch(fullUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }
          return response.json(); // Parse the JSON response
        })
        .then((data) => {
          // Handle the response data here
          contentDisplay.textContent = JSON.stringify(data);
        })
        .catch((error) => {
          // Handle errors here
          console.log(error);
        });
    });
  });
  