import { FormControl } from '@angular/forms';

export function validateNumber(formControl: FormControl) {

  return !isNaN(formControl.value) ? null : {
    validateNumber: {
      valid: false
    }
  };
}