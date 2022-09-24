import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
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
    this._data.loginStatus$.subscribe((data: any) => { console.log(data); })
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
    this._data.loginStatus$.next(this.loginForm.value.UserName)
    // this._data.admin$.next(false)
    this._data.loginStatus$.next(true)
    this.router.navigate(["/home"])
   }
   else {
    this._data.loginStatus$.next(false)
    this._dilog.open(DialogAnimationsExampleDialog)
   
  }
  }
 
  adminLogin(){
    this.adminUser=this.admindata.filter((e: { username: any; })=>e.username==this.loginForm.value.UserName)
    this.UserName=this.adminUser[0].username
    console.log(this.UserName)
    this.Password=this.adminUser[0].password
    console.log(this.Password)
    if (this.UserName == this.loginForm.value.UserName && this.Password == this.loginForm.value.Password){
      this._data.admin$.next(this.loginForm.value.UserName)
      this._data.loginStatus$.next(true)
      // this._data.admin$.next(true)
      this.router.navigate(["/admin"])
     }
     else {
      this._data.loginStatus$.next(false)
      this._dilog.open(DialogAnimationsExampleDialog)
     
    }
  }
  
 
 

}
@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dilog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) { }
  close(){
    this.dialogRef.close()
  }
}

