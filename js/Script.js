// Function to handle the submit button click for registration forms
function handleSubmit(event) {
    // Prevent the default form submission (which reloads the page)
    event.preventDefault(); 

    // Determine which form was submitted
    const formId = event.target.closest('form').id;
    let registrationType = '';

    if (formId === 'studentRegistrationForm') {
        registrationType = 'Student';
    } else if (formId === 'teacherRegistrationForm') {
        registrationType = 'Teacher';
    }

    // You can gather the form data here if you want to display it:
    const formData = new FormData(document.getElementById(formId));
    let name = formData.get('name');
    
    // Display a confirmation alert
    alert(`${registrationType} Registration Successful! Thank you, ${name}. 
    Note: Data was not saved as this is a static demonstration.`);

    // Optionally reset the form after the alert
    document.getElementById(formId).reset();
}

// Note: Ensure the 'handleSubmit(event)' function is added to the 
// submit button's onclick attribute in the HTML.