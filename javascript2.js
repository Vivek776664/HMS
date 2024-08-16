document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    // Create review element
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
        <h3>${name} (${rating}/5)</h3>
        <p>${review}</p>
    `;

    // Append review to reviews container
    document.getElementById('reviews').appendChild(reviewElement);

    // Clear form
    document.getElementById('reviewForm').reset();
});