// Submit Review
function submitReview(button) {
    const bookDiv = button.closest('.card-body');
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
      newBook.className = 'card mt-3';
      newBook.innerHTML = `
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <div class="reviews mb-3"></div>
          <input type="text" class="form-control mb-2 review-input" placeholder="Add your review">
          <button class="btn btn-primary" onclick="submitReview(this)">Submit Review</button>
        </div>
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
  