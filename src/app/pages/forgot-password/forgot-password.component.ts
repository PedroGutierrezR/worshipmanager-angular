import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';
import { PasswordValidation } from './match';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;
  token: string;
  message: string;
  error: string;
  response: number;
  validToken: boolean = false;
  hide: boolean = true;
  spinnerEnabled: boolean = false;
  password: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private forgotPasswordService: ForgotPasswordService
  ) { }


  ngOnInit() {
    this.form = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: [{value: '', disabled: true}, Validators.required],
    }, {
      validator: PasswordValidation.MatchPassword
    });

    this.route.params.subscribe((params : Params) => {
      this.token = params['token'];
      this.forgotPasswordService.checkTokenReset(this.token).subscribe((data: number) => {
        if(data === 1){
          this.validToken = true;
        } else {
          this.validToken = false;
          setTimeout( () => {
            this.router.navigate(['home']);
          }, 2000)
        }
      });
    })
  }

  onSubmit() {
    const password: string = this.form.value.confirmPassword;
    console.log(password);

    this.spinnerEnabled = true;

    this.forgotPasswordService.reset(this.token, password).subscribe(() => {
      this.message = 'Contraseña cambió exitosamente';
      this.spinnerEnabled = false;
        setTimeout(() => {
          this.router.navigate(['home']);
        }, 2000);
    });
  }

  passwordChange() {
    console.log(this.password);
    if (this.password.length > 0) this.form.controls['confirmPassword'].enable();
    else this.form.controls['confirmPassword'].disable();
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

}

