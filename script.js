



function isValidEmail(email) {
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showPopup() {
    var emailInput = document.getElementById('emailInput').value;

    // Check if the email is not empty
    if (emailInput.trim() !== "" && isValidEmail(emailInput)) {
        var popupContainer = document.getElementById('popupContainer');
        var popupEmail = document.getElementById('popupEmail');

        // Set the email content
        popupEmail.textContent = emailInput;

        // Display the popup
        popupContainer.style.display = 'block';
    } 
    
    else {
        errorMessage.style.display = 'block'; // Show error message
        emailInputField.classList.add('invalid-email'); // Add red border
    }
    

}





function hidePopup() {
    document.getElementById('popupContainer').style.display = 'none';
}