import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { ConsoleReporter } from 'jasmine';
import { ApiServices } from 'src/app/Services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  UserName :any="";
  Password :any="";
  URL="http://localhost:3000";
  userdata:any=[];
  user:any=[];
  admindata:any=[];
  userList:any=[];
  adminUser:any=[]


  constructor(private _fb:FormBuilder,private _dilog:MatDialog,private _data:ApiServices,private router: Router) { }

  ngOnInit(): void {
    this.loginForm=this._fb.group({
      UserName:['',Validators.required],
      Password:['',Validators.required],
    })
    this._data.getMembers().subscribe((datalist)=>{
      this.userdata=datalist
      console.log(this.userdata)
    }
    )
    this._data.getAdmins().subscribe((datalist)=>{
      this.admindata=datalist
      console.log(this.admindata)
    }
    )
  }
  
  login(){
   this.user=this.userdata.filter((e: { email: any; })=>e.email==this.loginForm.value.UserName)
   this.UserName=this.user[0].email
   console.log(this.UserName)
   this.Password = this.user[0].password
   console.log(this.Password)
   if (this.UserName == this.loginForm.value.UserName && this.Password == this.loginForm.value.Password){
    this.router.navigate(["/home"])
   }
  }
  adminLogin(){
    this.adminUser=this.admindata.filter((e: { username: any; })=>e.username==this.loginForm.value.UserName)
    this.UserName=this.adminUser[0].username
    console.log(this.UserName)
    this.Password=this.adminUser[0].password
    console.log(this.Password)
    if (this.UserName == this.loginForm.value.UserName && this.Password == this.loginForm.value.Password){
      this.router.navigate(["/admin"])
     }

  }
 

}

