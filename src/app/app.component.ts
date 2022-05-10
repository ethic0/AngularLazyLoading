import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './interfaces/login';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  user:Login = {username: "admin@example.com", password:"Adityadenis45!"}
  message:string="";
  returnUrl:string;
  public loginForm: FormGroup;
  public submit = false;
  constructor( private formBuilder:FormBuilder, private router:Router){}
  title = 'app1';
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}"
          )
        ]
      ]
    });
    this.returnUrl = '/dashboard';
  }
  get formControl() {
    return this.loginForm.controls;
  }

  onLogin(): void {
    console.log(this.loginForm.value);
    this.submit = true;
    if(this.loginForm.invalid){
      return;
    }
    else{
      if(this.formControl.email.value == this.user.username && this.formControl.password.value == this.user.password){
        console.log("Login success!");
        localStorage.setItem('isLoggedIn','true');
        localStorage.setItem('token',this.formControl.email.value);
        this.router.navigate([this.returnUrl]);
      }
      else{
        this.message = "Invalid Credentials!";
      }
    }
  }
}
