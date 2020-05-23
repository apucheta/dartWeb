import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cambio-pw',
  templateUrl: './cambio-pw.component.html',
  styleUrls: ['./cambio-pw.component.css']
})
export class CambioPwComponent implements OnInit {
  public cambioFormGroup: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initCambioForm();
  }

  initCambioForm() {
		this.cambioFormGroup = this.formBuilder.group({
			'cambio_usuario': [''],
      'cambio_pw': [''],
      'cambio_cpw': ['']
		});
  }

  get cambioForm() {
    return this.cambioFormGroup;
  }

  cambioPw(){
    let auth = firebase.auth();
    if ((this.cambioForm.get('cambio_usuario').value != '')) {
          auth.sendPasswordResetEmail(this.cambioForm.get('cambio_usuario').value).then(function() {
            // Email sent.
            console.log('Email Sent');
          }).catch(function(error) {
            // An error happened.
          });
        }
  }

}
