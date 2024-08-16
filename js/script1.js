function validateForm() {
    // Get form inputs
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var date = document.getElementById('date').value.trim();

    // Validate name
    if (name === '') {
        alert('Please enter your name.');
        return false;
    }

    // Validate email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate phone number
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a 10-digit phone number.');
        return false;
    }

    // Validate date (ensure it's in the future)
    var currentDate = new Date();
    var selectedDate = new Date(date);
    if (selectedDate <= currentDate) {
        alert('Please select a future date.');
        return false;
    }
     // Form is valid
     alert('Appointment request submitted successfully!');
       return true;
   }
