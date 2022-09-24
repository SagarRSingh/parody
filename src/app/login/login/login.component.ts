import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiServices } from 'src/app/Services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  UserName :any=""
  Password :any=""
  URL="http://localhost:3000"
  userdata:any=[]


  constructor(private _fb:FormBuilder,private _dilog:MatDialog,private _data:ApiServices) { }

  ngOnInit(): void {
    this.loginForm=this._fb.group({
      UserName:['',Validators.required],
      Password:['',Validators.required],
    })
    this._data.getMembers().subscribe((data)=>{
      this.userdata=data
      console.log(this.userdata)
    }
    )
  }
  login(){

  }
 

}

