const yesDose2 = document.getElementById('yes').value;  // Dose 2 'Yes' selection
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // email formatz

/* Input fields initialization */
//Patient Info
const vacForm = document.forms.vacData;
const firstNameField = vacForm.first_name;
const midNameField = vacForm.mid_name;
const lastNameField = vacForm.last_name;
const bdayField = vacForm.bday;
const genderField = vacForm.gender;
const emailField = vacForm.email;
// Address
const regionField = vacForm.region;
const provinceField = vacForm.province;
const barangayField = vacForm.barangay;
const streetField = vacForm.street;
// Vaccination Details
const vaccineDose1Field = vacForm.vaccine_dose1;
const dateDose1Field = vacForm.date_dose1;
const siteDose1Field = vacForm.site_dose1;
const dose2ConfirmField = vacForm.dose2_confirmation;
const vaccineDose2Field = vacForm.vaccine_dose2;
const dateDose2Field = vacForm.date_dose2;
const siteDose2Field = vacForm.site_dose2;

/* Validate and Submit Patient Information */
vacForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Patient fields validation
  if (!firstNameField.value) {
    setError(firstNameField, "First name is required");
    return;
  } else {
    clearError(firstNameField);
  }

  if (!midNameField.value) {
    setError(midNameField, "Middle name is required");
    return;
  } else {
    clearError(midNameField);
  }

  if (!lastNameField.value) {
    setError(lastNameField, "Last name is required");
    return;
  } else {
    clearError(lastNameField);
  }

  if (!bdayField.value) {
    setError(bdayField, "Please enter your birth day");
    return;
  } else {
    clearError(bdayField);
  }

  if (!genderField.value) {
    setError(genderField, "Please choose your gender");
    return;
  } else {
    clearError(genderField);
  }

  if (!emailField.value) {
    setError(emailField, "An e-mail is required");
    return;
  } else if (!validEmail) {
    setError(emailField, "E-mail format should be email@example.com");
    return;
  } else {
    clearError(emailField);
  }

  // Address fields validation
  if (!regionField.value) {
    setError(regionField, "Please select your region");
    return;
  } else {
    clearError(regionField);
  }

  if (!provinceField.value) {
    setError(provinceField, "Province is required");
    return;
  } else {
    clearError(provinceField);
  }

  if (!barangayField.value) {
    setError(barangayField, "Barangay is required");
    return;
  } else {
    clearError(barangayField);
  }

  if (!streetField.value) {
    setError(streetField, "Street is required");
    return;
  } else {
    clearError(streetField);
  }

  // Validation for details of first dose
  if (!vaccineDose1Field.value) {
    setError(vaccineDose1Field, "Please select the vaccine brand");
    return;
  } else {
    clearError(vaccineDose1Field);
  }

  if (!dateDose1Field.value) {
    setError(dateDose1Field, "Vaccination date is required");
    return;
  } else {
    clearError(dateDose1Field);
  }

  if (!siteDose1Field.value) {
    setError(siteDose1Field, "Vaccination site is required");
    return;
  } else {
    clearError(siteDose1Field);
  }

  // Validation for details of second dose 
  if (!dose2ConfirmField.value) {
    setError(dose2ConfirmField, "Please choose your answer");
    return;
  } else {
    clearError(dose2ConfirmField);
  }

  if (dose2ConfirmField.value === yesDose2) {
    if (!vaccineDose2Field.value) {
      setError(vaccineDose2Field, "Please select the vaccine brand");
      return;
    } else {
      clearError(vaccineDose2Field);
    }

    if (!dateDose2Field.value) {
      setError(dateDose2Field, "Vaccination date is required");
      return;
    } else {
      clearError(dateDose2Field);
    }

    if (!siteDose2Field.value) {
      setError(siteDose2Field, "Vaccination site is required");
      return;
    } else {
      clearError(siteDose2Field);
    }
  }

  // Display the vacciantion on the console
  console.log(`
==========================================================
              Patient Vaccination Information

Patient Name: ${firstNameField.value} ${midNameField.value} ${lastNameField.value}
Birthday    : ${bdayField.value}
Gender      : ${genderField.value}
Email       : ${emailField.value}
Address     : ${streetField.value}, ${barangayField.value}, ${provinceField.value}
              ${regionField.value}

First Dose
Vaccine Brand      : ${vaccineDose1Field.value}
Date of Vaccination: ${dateDose1Field.value}
Vaccination Site   : ${siteDose1Field.value}
Had a second dose  : ${dose2ConfirmField.value}
Second Dose
Vaccine Brand      : ${vaccineDose2Field.value == '' ? 'n/a' : vaccineDose2Field.value}
Date of Vaccination: ${dateDose2Field.value == '' ? 'n/a' : dateDose2Field.value}
Vaccination Site   : ${siteDose2Field.value == '' ? 'n/a' : siteDose2Field.value}
`)
});

/* Check if second vaccine dose has been taken
 * and show the input fields for second dose
 */
let dose2Fields = document.getElementsByClassName('dose2_field'); // Get the deatils fields for second dose
dose2ConfirmField.forEach((radioBtn) => {
  radioBtn.addEventListener('change', () => {
    if (dose2ConfirmField.value === yesDose2) {
      // Shows the input fields for second dose details
      for (let i = 0; i < dose2Fields.length; i++) {
        dose2Fields[i].style.display = 'flex';
      }
    } else {
      // Hides the input fields for second dose details
      for (let i = 0; i < dose2Fields.length; i++) {
        dose2Fields[i].style.display = 'none';
      }
    }
  });
});

/* Display error message for the given input field */
function setError(inputField, errMessage) {
  let name = '';
  if (inputField instanceof NodeList) {      // checks if it is not a radio button
    name = inputField[0].name;
  } else {
    name = inputField.name;
    inputField.style.borderColor = '#FF6666';
  }
  document.getElementById('error_' + name).innerText = errMessage
}

/* Clear error message for the given input field */
function clearError(inputField) {
  let name = '';
  if (inputField instanceof NodeList) {      // checks if it is not a radio button
    name = inputField[0].name;
  } else {
    name = inputField.name;
    inputField.style.borderColor = '#BEBEBE';
  }
  document.getElementById('error_' + name).innerText = "";
}

/* Check if the email format is valid */
function validEmail(inputField) {
  return inputField.value.match(emailRegex);
}