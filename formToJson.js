function submitForm() {
    event.preventDefault(); // Prevent the default form submission

    // Assuming all validations passed and you have your formData object ready
    const formData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": document.getElementById('firstName').value + " " + document.getElementById('lastName').value,
        "dateOfBirth": document.getElementById('date').value,
        "identifier": {
            "@type": "PropertyValue",
            "propertyID": "ORCID",
            "value": document.getElementById('orcid').value
        },
        // Add other form fields as needed
        "description": document.getElementById('description').value,
        "location": {
            "@type": "Place",
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": document.getElementById('latitude').value,
                "longitude": document.getElementById('longitude').value
            }
        }
        // Include ROR or other identifiers as necessary
    };

    // Convert the form data to JSON-LD
    const jsonLdData = JSON.stringify(formData, null, 2);

    // Display the JSON-LD data in the jsonDataDisplay element or handle as needed
    document.getElementById('jsonDataDisplay').textContent = jsonLdData;
}