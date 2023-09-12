
function fetchRandomQuote() {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        // Get a random index within the range of available quotes
        const randomIndex = Math.floor(Math.random() * data.length);
  
        // Get the random quote
        const randomQuote = data[randomIndex];
  
        // Update the HTML to display the random quote
        const quoteElement = document.querySelector(".quote p");
        quoteElement.textContent = randomQuote.text;
      })
      .catch((error) => console.error("Error fetching quotes:", error));
  }
  
  // Add an event listener to the "New Quote" button
  const newQuoteButton = document.getElementById("new-quote-btn");
  newQuoteButton.addEventListener("click", fetchRandomQuote);
  
  // Fetch and display a random quote when the page loads
  fetchRandomQuote();
