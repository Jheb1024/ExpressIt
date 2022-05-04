import { Component, OnInit } from '@angular/core';
import { filter, Subject, take, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup | any;
  title = 'material-login';
  constructor(
    private router:Router,
    private _authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]),
      name: new FormControl('', [Validators.required, Validators.pattern(
        '[a-zA-Z].*'
    )]),
    lastname: new FormControl('',[Validators.required, Validators.pattern(
      '[a-zA-Z].*'
    )]),
    age: new FormControl('',[Validators.required, Validators.pattern(
      '^[0-9]*$'
    )])
    });
   }
  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
    this._authService.register(this.loginForm.value.email,this.loginForm.value.password);
  }

}
