import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
   
    

   
  ],
  exports:[LoginComponent,]
})
export class LoginModule { }
