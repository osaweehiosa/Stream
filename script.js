// 1. Password Visibility Toggle
const togglePass = document.getElementById('eyeIcon');
const passwordField = document.getElementById('password');

togglePass.addEventListener('click', function() {
    // Check current type and flip it
    const isPassword = passwordField.getAttribute('type') === 'password';
    passwordField.setAttribute('type', isPassword ? 'text' : 'password');
    
    // Change icon color when active
    this.style.color = isPassword ? '#4ade80' : '#64748b';
});

// 2. Form Submission Handling
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    const submitBtn = document.querySelector('.payment-btn');
    
    // UI Feedback
    submitBtn.innerText = "Processing...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";

    // Simulate sending data
    setTimeout(() => {
        alert("Account Created! Redirecting to Payment Gateway...");
         window.location.href = "pay.html"; 
    }, 1200);
});