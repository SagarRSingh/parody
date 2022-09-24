import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  UserName :any=""
  Password :any=""


  constructor(private _fb:FormBuilder,private _dilog:MatDialog) { }

  ngOnInit(): void {
    this.loginForm=this._fb.group({
      UserName:['',Validators.required],
      Password:['',Validators.required],
    })
  }
  login(){

  }
 

}

