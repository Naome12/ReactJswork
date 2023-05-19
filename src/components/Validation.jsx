import React from 'react'

export const Validation = ({formErrors,setFormErrors}) => {
      let valid = true;
      const errors = {};
    
      if (formErrors.make.trim() === "") {
        errors.formErrors.make = "Make is required.";
        valid = false;
      }
    
      if (formErrors.model.trim() === "") {
        errors.formErrors.model = "Model is required.";
        valid = false;
      }
    
      if (formErrors.year.trim() === "") {
        errors.year = "Year is required.";
        valid = false;
      }
    
      if (formErrors.mileage.trim() === "") {
        errors.mileage = "Mileage is required.";
        valid = false;
      }
    
      if (formErrors.condition.trim() === "") {
        errors.condition = "Condition is required.";
        valid = false;
      }
    
      setFormErrors(errors);
      return valid;
}


