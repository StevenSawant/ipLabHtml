// Submit Review
function submitReview(button) {
    const bookDiv = button.closest('.book');
    const reviewInput = bookDiv.querySelector('.review-input');
    const reviews = bookDiv.querySelector('.reviews');
    if (reviewInput.value.trim() !== "") {
      reviews.innerHTML += `<p>${reviewInput.value}</p>`;
      reviewInput.value = "";
    } else {
      alert("Please enter a valid review.");
    }
  }
  
  // Add New Book
  function addBook() {
    const title = document.getElementById('new-book-title').value;
    if (title) {
      const newBook = document.createElement('div');
      newBook.className = 'book';
      newBook.innerHTML = `
        <h3>${title}</h3>
        <p class="reviews"></p>
        <input type="text" placeholder="Add your review" class="review-input">
        <button onclick="submitReview(this)">Submit Review</button>
      `;
      document.getElementById('new-books').appendChild(newBook);
      document.getElementById('new-book-title').value = "";
    } else {
      alert('Please enter a book title.');
    }
  }
  
  // Calculator Logic
  let calcDisplay = document.getElementById('calc-display');
  function appendCalc(value) {
    calcDisplay.value += value;
  }
  
  function clearCalc() {
    calcDisplay.value = "";
  }
  
  function calculateResult() {
    try {
      calcDisplay.value = eval(calcDisplay.value);
    } catch {
      alert("Invalid expression");
      clearCalc();
    }
  }
  