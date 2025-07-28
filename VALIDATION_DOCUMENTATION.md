# Field Validation Documentation
## Student Registration Form - Brightfield Academy

This documentation provides comprehensive details about the field validation implemented in the student registration form, including screenshots demonstrating each validation rule.

---

## Form Overview

The student registration form includes three main sections:
1. **Personal Information** - Student's basic details
2. **Guardian Information** - Parent/guardian contact details  
3. **Additional Information** - Optional fields for medical conditions and previous school

![Empty Registration Form](https://github.com/user-attachments/assets/c1546e62-e398-41bd-924d-781cdb5c3217)

---

## Required Field Validation

All required fields show validation errors when attempting to submit an empty form:

![All Required Field Validation](https://github.com/user-attachments/assets/5ce56160-f065-45b3-9c0e-98dda1054548)

**Required Fields:**
- First Name *
- Last Name *
- Email Address *
- Phone Number *
- Date of Birth *
- Grade Level *
- Guardian Name *
- Guardian Phone *
- Home Address *

---

## Name Field Validation

**Applies to:** First Name, Last Name, Guardian Name

### Validation Rules:
1. **Required** - Cannot be empty
2. **No Numbers** - Cannot contain numeric characters (0-9)
3. **Valid Characters** - Only letters, spaces, apostrophes, and hyphens allowed
4. **Minimum Length** - Must be at least 2 characters long

### Example Validation Errors:

![Name Validation Errors](https://github.com/user-attachments/assets/1cc9745a-7189-48a3-9e89-56d0b42fdcdd)

**Error Messages:**
- `"Name is required"` - When field is empty
- `"Name cannot contain numbers"` - When field contains digits (e.g., "John123")
- `"Name must be at least 2 characters long"` - When field has less than 2 characters (e.g., "A")
- `"Name can only contain letters, spaces, apostrophes, and hyphens"` - When field contains invalid special characters

**Valid Examples:**
- "John"
- "Mary-Jane" 
- "O'Connor"
- "Jean Paul"

---

## Email Validation

**Applies to:** Email Address

### Validation Rules:
1. **Required** - Cannot be empty
2. **Valid Email Format** - Must follow standard email format (user@domain.com)
3. **Maximum Length** - Cannot exceed 254 characters
4. **Domain Required** - Must include @ symbol and valid domain

**Error Messages:**
- `"Email is required"` - When field is empty
- `"Please enter a valid email address"` - When format is invalid
- `"Email address is too long"` - When exceeds 254 characters

**Valid Examples:**
- "john.smith@email.com"
- "student@school.edu"
- "parent.name+child@domain.org"

**Invalid Examples:**
- "plainaddress" (no @ symbol)
- "missing-domain@" (no domain)
- "@missing-user.com" (no user part)

---

## Phone Number Validation

**Applies to:** Phone Number, Guardian Phone

### Validation Rules:
1. **Required** - Cannot be empty
2. **Canadian Format** - Must be valid Canadian phone number
3. **10 or 11 Digits** - 10 digits (local) or 11 digits (with +1)
4. **Valid Area Code** - First digit of area code must be 2-9
5. **Valid Exchange** - First digit of exchange must be 2-9

**Error Messages:**
- `"Phone number is required"` - When field is empty
- `"Please enter a valid Canadian phone number (e.g., (123) 456-7890 or 123-456-7890)"` - When format is invalid

**Accepted Formats:**
- "(123) 456-7890"
- "123-456-7890"
- "123.456.7890"
- "1234567890"
- "1-123-456-7890"

**Invalid Examples:**
- "123" (too short)
- "111-456-7890" (invalid area code starting with 1)
- "123-156-7890" (invalid exchange starting with 1)

---

## Date of Birth Validation

**Applies to:** Date of Birth

### Validation Rules:
1. **Required** - Cannot be empty
2. **Valid Date Format** - Uses HTML5 date picker for consistent formatting

**Error Messages:**
- `"Date of birth is required"` - When field is empty

**Format:** MM/DD/YYYY (handled by browser date picker)

---

## Grade Level Validation

**Applies to:** Grade Level

### Validation Rules:
1. **Required** - Must select a grade level from dropdown

**Error Messages:**
- `"Grade selection is required"` - When no option is selected

**Available Options:**
- Kindergarten
- Grade 1-5
- Grade 6-8
- Grade 9-10
- Grade 11-12

---

## Canadian Address Validation

**Applies to:** Home Address

### Validation Rules:
1. **Required** - Cannot be empty
2. **Minimum Length** - Must be at least 10 characters
3. **Canadian Indicators** - Must contain either:
   - Valid Canadian postal code (e.g., K1A 0A9)
   - Canadian province name or abbreviation
   - The word "Canada"

**Error Messages:**
- `"Address is required"` - When field is empty
- `"Please provide a complete address"` - When less than 10 characters
- `"Please provide a Canadian address with a postal code (e.g., K1A 0A9) or province name"` - When no Canadian indicators found
- `"Please check the postal code format (e.g., K1A 0A9)"` - When postal code format is invalid

**Valid Examples:**
- "123 Main Street, Toronto, ON K1A 0A9"
- "456 Oak Avenue, Vancouver, British Columbia"
- "789 Pine Road, Calgary, Alberta, Canada"

**Recognized Provinces:**
- AB, BC, MB, NB, NL, NS, NT, NU, ON, PE, QC, SK, YT
- Alberta, British Columbia, Manitoba, New Brunswick, etc.

---

## Optional Fields

**No Validation Applied:**
- Previous School (Optional)
- Medical Conditions or Allergies (Optional)

These fields can be left empty or contain any text without triggering validation errors.

---

## Real-time Validation Behavior

### When Validation Triggers:
- **Form Submission** - All validation rules are checked when "Complete Registration" button is clicked
- **Error Clearing** - Validation errors are cleared when user starts typing in a field

### Visual Indicators:
- **Error State** - Fields with validation errors show red border
- **Error Messages** - Red text appears below invalid fields
- **Success State** - Valid fields show normal border styling

---

## Successful Form Submission

### Valid Form Example

![Completed Valid Form](https://github.com/user-attachments/assets/e01887fd-fd81-46e2-968e-30fc5689cca3)

The form will only submit successfully when ALL required fields pass validation. If any validation errors exist, the form submission is prevented and error messages are displayed to guide the user.

**Successful Submission Requirements:**
- All required fields completed
- All field values pass their respective validation rules
- No validation error messages displayed

### Registration Success Dashboard

Upon successful validation, the user is redirected to the student dashboard displaying their registration information:

![Successful Registration Dashboard](https://github.com/user-attachments/assets/af9a9af2-9bfc-42e7-a55f-000859f8ddf0)

The dashboard confirms successful registration and displays all submitted information in an organized, easy-to-read format.

---

## Technical Implementation

The validation is implemented using:
- Custom validation functions in `src/utils/validation.ts`
- React state management for error handling
- Real-time error clearing on user input
- Comprehensive error messaging for user guidance

This ensures a user-friendly registration experience while maintaining data quality and consistency.