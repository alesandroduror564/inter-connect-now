/*
 * File: advanced_form_validation.js
 * Description: Advanced form validation logic for a multi-step form
 */

// Constants
const MIN_USERNAME_LENGTH = 3;
const MAX_USERNAME_LENGTH = 20;
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 30;
const VALID_EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

// Form data
let formData = {
    step1: {
        firstName: '',
        lastName: '',
        email: ''
    },
    step2: {
        username: '',
        password: '',
        confirmPassword: ''
    },
    step3: {
        address: '',
        city: '',
        country: '',
        zipCode: ''
    }
};

// Step 1 validation
function validateStep1() {
    const { firstName, lastName, email } = formData.step1;
  
    if (!firstName || !lastName || !email) {
        return false;
    }
    
    if (firstName.length < MIN_USERNAME_LENGTH || firstName.length > MAX_USERNAME_LENGTH) {
        return false;
    }
  
    if (lastName.length < MIN_USERNAME_LENGTH || lastName.length > MAX_USERNAME_LENGTH) {
        return false;
    }
    
    if (!email.match(VALID_EMAIL_REGEX)) {
        return false;
    }
    
    return true;
}

// Step 2 validation
function validateStep2() {
    const { username, password, confirmPassword } = formData.step2;
    
    if (!username || !password || !confirmPassword) {
        return false;
    }
    
    if (username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) {
        return false;
    }
  
    if (password.length < MIN_PASSWORD_LENGTH || password.length > MAX_PASSWORD_LENGTH) {
        return false;
    }
    
    if (password !== confirmPassword) {
        return false;
    }
    
    return true;
}

// Step 3 validation
function validateStep3() {
    const { address, city, country, zipCode } = formData.step3;
    
    if (!address || !city || !country || !zipCode) {
        return false;
    }
    
    return true;
}

// Form submission
function submitForm() {
    if (validateStep1() && validateStep2() && validateStep3()) {
        console.log('Form submitted successfully');
        // Additional logic for form submission
    } else {
        console.log('Form validation failed');
        // Display error messages to the user
    }
}

// Example usage
formData.step1.firstName = 'John';
formData.step1.lastName = 'Doe';
formData.step1.email = 'john.doe@example.com';

formData.step2.username = 'johndoe';
formData.step2.password = 'password123';
formData.step2.confirmPassword = 'password123';

formData.step3.address = '123 Main St';
formData.step3.city = 'New York';
formData.step3.country = 'USA';
formData.step3.zipCode = '10001';

submitForm();