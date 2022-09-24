import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createteamdialogue',
  templateUrl: './createteamdialogue.component.html',
  styleUrls: ['./createteamdialogue.component.css']
})
export class CreateteamdialogueComponent implements OnInit {

  Members!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
    this.Members = this.formBuilder.group({
      Title: ['', Validators.required],
      TeamNumbers: ['', Validators.required],
      MinTeam: ['', Validators.required],
      TotalMembers: ['', Validators.required],
      MaxTeam: ['', Validators.required],
      Front: ['', Validators.required],
      Back: ['', Validators.required],
      QA: ['', Validators.required],
      DB: ['', Validators.required]

    })
  }
  GenTeam(){
    console.log(this.Members.value);
  }

}
