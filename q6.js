// Function to validate user information
function validateUserInformation(name, email, age) {
    // Check data type of name
    if (typeof name !== 'string') {
        console.log("Name should be a string.");
    }

    // Check data type of email
    if (typeof email !== 'string') {
        console.log("Email should be a string.");
    }

    // Check data type of age
    if (typeof age !== 'number' || isNaN(age)) {
        console.log("Age should be a number.");
    }
}


validateUserInformation("John Doe", "john@example.com", 30); // All fields are valid


validateUserInformation(123, "john@example.com", 30); // Name should be a string.
validateUserInformation("John Doe", 123, 30); // Email should be a string.
validateUserInformation("John Doe", "john@example.com", "thirty"); // Age should be a number.
