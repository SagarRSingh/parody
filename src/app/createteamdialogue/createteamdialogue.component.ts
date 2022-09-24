import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServices } from '../Services/api.service';
import { TeamServices } from '../Services/team.service';

@Component({
  selector: 'app-createteamdialogue',
  templateUrl: './createteamdialogue.component.html',
  styleUrls: ['./createteamdialogue.component.css'],
  providers:[TeamServices],
})
export class CreateteamdialogueComponent implements OnInit, OnDestroy {

  Members!: FormGroup;
  teamIds:number[]=[];
  constructor(private formBuilder: FormBuilder, private _team:TeamServices, private _dialog:MatDialog,
     private _self:MatDialogRef<CreateteamdialogueComponent>) {}

  ngOnInit(): void {
    this.Members = this.formBuilder.group({
      Title: ['', Validators.required],
      TeamNumbers: [4, Validators.required],
      MinTeam: ['', Validators.required],
      TotalMembers: [6, Validators.required],
      MaxTeam: ['', Validators.required],
      Front: [2, Validators.required],
      Back: [2, Validators.required],
      QA: [1, Validators.required],
      DB: [1, Validators.required]

    })
  }

  GenTeam(){
    // if(this.Members.status === 'INVALID') return
    
    let val = this.Members.value;
    this._team.generateTeams(Number(val.Front), Number(val.Back), Number(val.QA), Number(val.DB), Number(val.TotalMembers), Number(val.TeamNumbers));
    this._team.teamsCreated$.subscribe(ldata=> {
      this._dialog.open(TableComponent,{data: {teams:ldata}});
      this._self.close();
    })
  }

  ngOnDestroy(): void {
    this._team.teamsCreated$.unsubscribe()
  }

}


@Component({
  selector: 'team-table',
  templateUrl: './table.dialog.html',
  providers:[TeamServices]
})
export class TableComponent implements OnInit{
  dataSource=[];
  displayedColumns:string[]=['Team Name', "Members"]
  
  constructor(private _self:MatDialogRef<TableComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private _team:TeamServices, private _api:ApiServices){}
  
  ngOnInit(): void {
    this._api.getTeams().subscribe(hdata=>{
      this.dataSource = hdata.filter((obj:any)=>this.data.teams.includes(obj.id))
      this.dataSource.forEach((team:any)=>{
        this._api.getMembers().subscribe(membersList=>{
          team.memberDetails = membersList.filter((memberObj:any)=>team.members.includes(memberObj.id))
        })
      })
    });    
  }

  close(){
    this._self.close()
  }


}
