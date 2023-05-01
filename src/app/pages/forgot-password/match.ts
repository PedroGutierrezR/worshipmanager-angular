import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {

        const password = AC.get('password')?.value;
        const confirmPassword = AC.get('confirmPassword')?.value;

        if (password != confirmPassword && (confirmPassword.length > 0)) {
          AC.get('confirmPassword')?.setErrors({ MatchPassword: true });
        }
    }
}
