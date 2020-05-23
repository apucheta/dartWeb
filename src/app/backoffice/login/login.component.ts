import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {environment} from 'src/environments/environment';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

firebase.initializeApp(environment.firebaseConfig)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  public regFormGroup: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
		this.loginFormGroup = this.formBuilder.group({
			'log_usuario': [''],
			'log_pw': ['']
		});
  }
  get loginForm() {
		return this.loginFormGroup;
  }

  
  loginUsuario() {
    //Valido que los campos no esten vacios y loggeo el usuario.
		if ((this.loginForm.get('log_usuario').value != "") && (this.loginForm.get('log_pw').value != "")){    
      
      firebase.auth().signInWithEmailAndPassword(this.loginForm.get('log_usuario').value, this.loginForm.get('log_pw').value)
      .then(success => {
        this.router.navigateByUrl('/admin');
      })       
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    }
  }
}
