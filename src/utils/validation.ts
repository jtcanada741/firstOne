/**
 * Validation utilities for the student registration form
 */

/**
 * Validates that a name contains only letters, spaces, apostrophes, and hyphens
 * and does not contain any numeric characters
 */
export const validateName = (name: string): { isValid: boolean; message?: string } => {
  if (!name || !name.trim()) {
    return { isValid: false, message: 'Name is required' };
  }

  const trimmedName = name.trim();
  
  // Check for numeric characters
  if (/\d/.test(trimmedName)) {
    return { isValid: false, message: 'Name cannot contain numbers' };
  }

  // Check for valid name characters (letters, spaces, apostrophes, hyphens)
  if (!/^[a-zA-Z\s'-]+$/.test(trimmedName)) {
    return { isValid: false, message: 'Name can only contain letters, spaces, apostrophes, and hyphens' };
  }

  // Check minimum length
  if (trimmedName.length < 2) {
    return { isValid: false, message: 'Name must be at least 2 characters long' };
  }

  return { isValid: true };
};

/**
 * Validates Canadian phone numbers
 * Accepts formats like: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890
 */
export const validateCanadianPhone = (phone: string): { isValid: boolean; message?: string } => {
  if (!phone || !phone.trim()) {
    return { isValid: false, message: 'Phone number is required' };
  }

  const trimmedPhone = phone.trim();
  
  // Remove all non-digit characters to get the raw number
  const digitsOnly = trimmedPhone.replace(/\D/g, '');

  // Canadian phone numbers should be 10 digits (without country code) or 11 digits (with +1)
  if (digitsOnly.length === 10) {
    // Check if first digit is valid for Canadian area codes (2-9)
    // and fourth digit is valid for exchange codes (2-9)
    const areaCode = digitsOnly.substring(0, 3);
    const exchange = digitsOnly.substring(3, 6);
    
    if (areaCode[0] >= '2' && areaCode[0] <= '9' && exchange[0] >= '2' && exchange[0] <= '9') {
      return { isValid: true };
    }
  } else if (digitsOnly.length === 11 && digitsOnly.startsWith('1')) {
    // 11-digit number starting with 1 (North American format)
    const areaCode = digitsOnly.substring(1, 4);
    const exchange = digitsOnly.substring(4, 7);
    
    if (areaCode[0] >= '2' && areaCode[0] <= '9' && exchange[0] >= '2' && exchange[0] <= '9') {
      return { isValid: true };
    }
  }

  return { 
    isValid: false, 
    message: 'Please enter a valid Canadian phone number (e.g., (123) 456-7890 or 123-456-7890)' 
  };
};

/**
 * Validates email addresses with more comprehensive checks
 */
export const validateEmail = (email: string): { isValid: boolean; message?: string } => {
  if (!email || !email.trim()) {
    return { isValid: false, message: 'Email is required' };
  }

  const trimmedEmail = email.trim();

  // More comprehensive email validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  if (!emailRegex.test(trimmedEmail)) {
    return { isValid: false, message: 'Please enter a valid email address' };
  }

  // Check for reasonable length
  if (trimmedEmail.length > 254) {
    return { isValid: false, message: 'Email address is too long' };
  }

  return { isValid: true };
};

/**
 * Validates Canadian addresses
 * Checks for basic Canadian address components like postal codes and provinces
 */
export const validateCanadianAddress = (address: string): { isValid: boolean; message?: string } => {
  if (!address || !address.trim()) {
    return { isValid: false, message: 'Address is required' };
  }

  const trimmedAddress = address.trim();

  // Check minimum length
  if (trimmedAddress.length < 10) {
    return { isValid: false, message: 'Please provide a complete address' };
  }

  // Canadian postal code pattern (e.g., K1A 0A9 or K1A0A9)
  const postalCodeRegex = /[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d/;
  
  // Canadian provinces and territories (common abbreviations)
  const canadianProvinces = [
    'AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT',
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
    'Nova Scotia', 'Northwest Territories', 'Nunavut', 'Ontario', 'Prince Edward Island',
    'Quebec', 'Saskatchewan', 'Yukon'
  ];

  const hasPostalCode = postalCodeRegex.test(trimmedAddress);
  const hasProvince = canadianProvinces.some(province => 
    trimmedAddress.toUpperCase().includes(province.toUpperCase())
  );

  // Check for "Canada" in the address (optional but helpful)
  const hasCanada = /\bcanada\b/i.test(trimmedAddress);

  // Address should have either a postal code OR a province mention to be considered Canadian
  if (!hasPostalCode && !hasProvince && !hasCanada) {
    return { 
      isValid: false, 
      message: 'Please provide a Canadian address with a postal code (e.g., K1A 0A9) or province name' 
    };
  }

  // If postal code is present, validate its format more strictly
  if (hasPostalCode) {
    const postalCodeMatch = trimmedAddress.match(/([A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d)/);
    if (postalCodeMatch) {
      const postalCode = postalCodeMatch[1].replace(/\s|-/g, '').toUpperCase();
      // Ensure it follows the exact Canadian postal code format
      if (!/^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(postalCode)) {
        return { 
          isValid: false, 
          message: 'Please check the postal code format (e.g., K1A 0A9)' 
        };
      }
    }
  }

  return { isValid: true };
};