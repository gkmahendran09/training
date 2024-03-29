const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];

const quoteElement = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote-btn");

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
    quoteElement.textContent = getRandomQuote();
}

newQuoteBtn.addEventListener("click", displayQuote);


displayQuote();
