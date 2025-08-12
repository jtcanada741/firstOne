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
  
  // Check maximum length boundary (100 characters for reasonable name length)
  if (trimmedName.length > 100) {
    return { isValid: false, message: 'Name cannot exceed 100 characters' };
  }

  // Check minimum length boundary
  if (trimmedName.length < 2) {
    return { isValid: false, message: 'Name must be at least 2 characters long' };
  }

  // Check for numeric characters
  if (/\d/.test(trimmedName)) {
    return { isValid: false, message: 'Name cannot contain numbers' };
  }

  // Check for valid name characters (letters, spaces, apostrophes, hyphens)
  if (!/^[a-zA-Z\s'-]+$/.test(trimmedName)) {
    return { isValid: false, message: 'Name can only contain letters, spaces, apostrophes, and hyphens' };
  }

  // Check for consecutive spaces (boundary condition)
  if (/\s{2,}/.test(trimmedName)) {
    return { isValid: false, message: 'Name cannot contain consecutive spaces' };
  }

  // Check for names that start or end with special characters
  if (/^[-']|[-']$/.test(trimmedName)) {
    return { isValid: false, message: 'Name cannot start or end with hyphens or apostrophes' };
  }

  // Check for names with only special characters and spaces
  if (/^[\s'-]+$/.test(trimmedName)) {
    return { isValid: false, message: 'Name must contain at least one letter' };
  }

  // Check for too many consecutive special characters
  if (/[-']{2,}/.test(trimmedName)) {
    return { isValid: false, message: 'Name cannot contain consecutive hyphens or apostrophes' };
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
  
  // Check maximum length boundary (prevent extremely long inputs)
  if (trimmedPhone.length > 20) {
    return { isValid: false, message: 'Phone number is too long' };
  }

  // Check minimum length boundary (needs at least 10 digits)
  if (trimmedPhone.length < 10) {
    return { isValid: false, message: 'Phone number is too short' };
  }
  
  // Remove all non-digit characters to get the raw number
  const digitsOnly = trimmedPhone.replace(/\D/g, '');

  // Check for minimum digits
  if (digitsOnly.length < 10) {
    return { isValid: false, message: 'Phone number must contain at least 10 digits' };
  }

  // Check for maximum digits boundary
  if (digitsOnly.length > 11) {
    return { isValid: false, message: 'Phone number cannot exceed 11 digits' };
  }

  // Check for repeated digits (boundary condition - all same digit)
  if (/^(\d)\1{9,}$/.test(digitsOnly)) {
    return { isValid: false, message: 'Phone number cannot consist of all the same digit' };
  }

  // Check for sequential patterns (boundary condition)
  const sequential = /0123456789|9876543210|1234567890|0987654321/;
  if (sequential.test(digitsOnly)) {
    return { isValid: false, message: 'Phone number cannot be a sequential pattern' };
  }

  // Canadian phone numbers should be 10 digits (without country code) or 11 digits (with +1)
  if (digitsOnly.length === 10) {
    // Check if first digit is valid for Canadian area codes (2-9)
    // and fourth digit is valid for exchange codes (2-9)
    const areaCode = digitsOnly.substring(0, 3);
    const exchange = digitsOnly.substring(3, 6);
    
    // Additional boundary validations for area code
    if (areaCode[0] < '2' || areaCode[0] > '9') {
      return { isValid: false, message: 'Invalid area code - first digit must be between 2-9' };
    }

    // Check for invalid area codes (boundary conditions)
    const invalidAreaCodes = ['000', '111', '555', '800', '888', '900', '999'];
    if (invalidAreaCodes.includes(areaCode)) {
      return { isValid: false, message: 'Invalid area code format' };
    }

    if (exchange[0] < '2' || exchange[0] > '9') {
      return { isValid: false, message: 'Invalid exchange code - first digit must be between 2-9' };
    }

    // Check for invalid exchange codes (boundary conditions)
    const invalidExchanges = ['000', '111', '555'];
    if (invalidExchanges.includes(exchange)) {
      return { isValid: false, message: 'Invalid exchange code format' };
    }

    return { isValid: true };
  } else if (digitsOnly.length === 11 && digitsOnly.startsWith('1')) {
    // 11-digit number starting with 1 (North American format)
    const areaCode = digitsOnly.substring(1, 4);
    const exchange = digitsOnly.substring(4, 7);
    
    // Apply same validation rules for 11-digit numbers
    if (areaCode[0] < '2' || areaCode[0] > '9') {
      return { isValid: false, message: 'Invalid area code - first digit must be between 2-9' };
    }

    const invalidAreaCodes = ['000', '111', '555', '800', '888', '900', '999'];
    if (invalidAreaCodes.includes(areaCode)) {
      return { isValid: false, message: 'Invalid area code format' };
    }

    if (exchange[0] < '2' || exchange[0] > '9') {
      return { isValid: false, message: 'Invalid exchange code - first digit must be between 2-9' };
    }

    const invalidExchanges = ['000', '111', '555'];
    if (invalidExchanges.includes(exchange)) {
      return { isValid: false, message: 'Invalid exchange code format' };
    }

    return { isValid: true };
  }

  return { 
    isValid: false, 
    message: 'Please enter a valid Canadian phone number (e.g., (123) 456-7890 or 123-456-7890)' 
  };
};

/**
 * Validates email addresses with comprehensive boundary condition checks
 */
export const validateEmail = (email: string): { isValid: boolean; message?: string } => {
  if (!email || !email.trim()) {
    return { isValid: false, message: 'Email is required' };
  }

  const trimmedEmail = email.trim();

  // Check maximum length boundary
  if (trimmedEmail.length > 254) {
    return { isValid: false, message: 'Email address cannot exceed 254 characters' };
  }

  // Check minimum length boundary
  if (trimmedEmail.length < 5) {
    return { isValid: false, message: 'Email address is too short' };
  }

  // Check for multiple @ symbols (boundary condition)
  const atCount = (trimmedEmail.match(/@/g) || []).length;
  if (atCount !== 1) {
    return { isValid: false, message: 'Email address must contain exactly one @ symbol' };
  }

  const [localPart, domain] = trimmedEmail.split('@');

  // Validate local part boundaries
  if (!localPart || localPart.length === 0) {
    return { isValid: false, message: 'Email address must have a username before @' };
  }

  if (localPart.length > 64) {
    return { isValid: false, message: 'Email username cannot exceed 64 characters' };
  }

  // Check for consecutive dots in local part (boundary condition)
  if (/\.{2,}/.test(localPart)) {
    return { isValid: false, message: 'Email username cannot contain consecutive dots' };
  }

  // Check if local part starts or ends with dot
  if (localPart.startsWith('.') || localPart.endsWith('.')) {
    return { isValid: false, message: 'Email username cannot start or end with a dot' };
  }

  // Validate domain boundaries
  if (!domain || domain.length === 0) {
    return { isValid: false, message: 'Email address must have a domain after @' };
  }

  if (domain.length > 253) {
    return { isValid: false, message: 'Email domain cannot exceed 253 characters' };
  }

  // Check for valid domain format
  if (!/^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(domain)) {
    return { isValid: false, message: 'Invalid domain format' };
  }

  // Check for at least one dot in domain (TLD requirement)
  if (!domain.includes('.')) {
    return { isValid: false, message: 'Email domain must include a top-level domain' };
  }

  // Check TLD length boundaries
  const tld = domain.split('.').pop();
  if (!tld || tld.length < 2 || tld.length > 63) {
    return { isValid: false, message: 'Invalid top-level domain length' };
  }

  // Check for invalid TLD characters
  if (!/^[a-zA-Z]+$/.test(tld)) {
    return { isValid: false, message: 'Top-level domain can only contain letters' };
  }

  // More comprehensive email validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  if (!emailRegex.test(trimmedEmail)) {
    return { isValid: false, message: 'Please enter a valid email address' };
  }

  return { isValid: true };
};

/**
 * Validates Canadian addresses with comprehensive boundary conditions
 * Checks for basic Canadian address components like postal codes and provinces
 */
export const validateCanadianAddress = (address: string): { isValid: boolean; message?: string } => {
  if (!address || !address.trim()) {
    return { isValid: false, message: 'Address is required' };
  }

  const trimmedAddress = address.trim();

  // Check maximum length boundary (prevent extremely long addresses)
  if (trimmedAddress.length > 500) {
    return { isValid: false, message: 'Address cannot exceed 500 characters' };
  }

  // Check minimum length boundary
  if (trimmedAddress.length < 10) {
    return { isValid: false, message: 'Please provide a complete address' };
  }

  // Check for consecutive whitespace (boundary condition)
  if (/\s{3,}/.test(trimmedAddress)) {
    return { isValid: false, message: 'Address cannot contain excessive whitespace' };
  }

  // Check for basic address content (must contain at least one number and letter)
  if (!/\d/.test(trimmedAddress)) {
    return { isValid: false, message: 'Address must contain at least one number' };
  }

  if (!/[a-zA-Z]/.test(trimmedAddress)) {
    return { isValid: false, message: 'Address must contain at least one letter' };
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

  // If postal code is present, validate its format more strictly with boundary conditions
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

      // Additional boundary validations for postal code
      // First letter cannot be D, F, I, O, Q, U, W, Z
      const invalidFirstLetters = ['D', 'F', 'I', 'O', 'Q', 'U', 'W', 'Z'];
      if (invalidFirstLetters.includes(postalCode[0])) {
        return { 
          isValid: false, 
          message: 'Invalid postal code - first letter is not valid for Canadian postal codes' 
        };
      }

      // Third and fifth letters cannot be D, F, I, O, Q, U
      const invalidLetters = ['D', 'F', 'I', 'O', 'Q', 'U'];
      if (invalidLetters.includes(postalCode[2]) || invalidLetters.includes(postalCode[4])) {
        return { 
          isValid: false, 
          message: 'Invalid postal code format for Canadian addresses' 
        };
      }
    }
  }

  // Check for suspicious patterns (boundary condition)
  if (/(.)\1{4,}/.test(trimmedAddress.replace(/\s/g, ''))) {
    return { isValid: false, message: 'Address contains suspicious repeated characters' };
  }

  return { isValid: true };
};

/**
 * Validates date of birth with realistic age boundaries for student registration
 */
export const validateDateOfBirth = (dateOfBirth: string): { isValid: boolean; message?: string } => {
  if (!dateOfBirth || !dateOfBirth.trim()) {
    return { isValid: false, message: 'Date of birth is required' };
  }

  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  
  // Check if date is valid
  if (isNaN(birthDate.getTime())) {
    return { isValid: false, message: 'Please enter a valid date' };
  }

  // Check for future dates (boundary condition)
  if (birthDate > today) {
    return { isValid: false, message: 'Date of birth cannot be in the future' };
  }

  // Calculate age boundaries
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();
  
  // Adjust age if birthday hasn't occurred this year
  let exactAge = age;
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    exactAge--;
  }

  // Check minimum age boundary (too young for school)
  if (exactAge < 3) {
    return { isValid: false, message: 'Student must be at least 3 years old' };
  }

  // Check maximum age boundary (too old for typical K-12)
  if (exactAge > 25) {
    return { isValid: false, message: 'Student age cannot exceed 25 years for K-12 programs' };
  }

  // Check for unrealistic birth dates (boundary condition)
  const minYear = today.getFullYear() - 25;
  const maxYear = today.getFullYear() - 3;
  
  if (birthDate.getFullYear() < minYear) {
    return { isValid: false, message: 'Birth year is too early for student registration' };
  }

  if (birthDate.getFullYear() > maxYear) {
    return { isValid: false, message: 'Birth year is too recent for student registration' };
  }

  // Additional boundary check for very early dates (historical boundary)
  if (birthDate.getFullYear() < 1990) {
    return { isValid: false, message: 'Please verify the birth year - it seems unusually early' };
  }

  return { isValid: true };
};