function submitForm() {
    // Prevent the default form submission
    event.preventDefault();

    // Your validation code here...

    // Assuming all validations passed and you have your formData object ready
    const formData = {
        title: document.getElementById('title').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        date: document.getElementById('date').value,
        orcid: document.getElementById('orcid').value,
        ror: document.getElementById('ror').value,
        latitude: document.getElementById('latitude').value,
        longitude: document.getElementById('longitude').value,
        description: document.getElementById('description').value
    };

    // Convert the form data to JSON
    const jsonData = JSON.stringify(formData, null, 2);

    // Display the JSON data in the jsonDataDisplay element
    document.getElementById('jsonDataDisplay').textContent = jsonData;
}