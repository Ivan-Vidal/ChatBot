
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submit: boolean;


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.submit = false;
    
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required ],
    });
  }

  login(){
    console.log('login em progresso...')
    console.log(this.loginForm.value)
if(this.loginForm.value === 'admim@test.com', '123456'){
  this.router.navigateByUrl('/home')
  console.log('Login Feito com Sucesso !')
 
} else{
  alert('Login inválido')
}
     
    }
  }
