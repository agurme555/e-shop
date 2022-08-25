import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passWordMisMatch(control:AbstractControl) : ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if(password != confirmPassword) {
        return {'passwordNotMatch':true};
    }
    return null ;
}

export function ageMismatch(control:AbstractControl):ValidationErrors | null {
//logic
    return null;
}