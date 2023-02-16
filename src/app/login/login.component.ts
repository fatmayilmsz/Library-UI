import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  //Create FormGroup
  requiredForm!: FormGroup;
  constructor(private fb: FormBuilder) {
     this.myForm();
  }

  myForm() {
    this.requiredForm = this.fb.group({
    name: ['', Validators.required ],

    });
 }
 ngOnInit()
 {

 }
}
