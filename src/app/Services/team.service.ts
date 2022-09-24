import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ApiServices } from "./api.service";

@Injectable()
export class TeamServices {

  teamsCreated$ = new Subject<number[]>()

  constructor(private _api:ApiServices){}

  generateTeams(Front:number,Back:number,QA:number,DB:number,TotalMembers:number,TotalTeams:number){
    
    this._api.getMembers().subscribe(memberList=>{
      let tempMember:number[]=[];
      let teamIds:number[]=[];
      let frontMembers = memberList.filter((member:any)=>member.category==='Front').map((obj:any)=>obj.id);
      let backMembers = memberList.filter((member:any)=>member.category==='Back').map((obj:any)=>obj.id);
      let QAMembers = memberList.filter((member:any)=>member.category==='QA').map((obj:any)=>obj.id);
      let DBMembers = memberList.filter((member:any)=>member.category==='DB').map((obj:any)=>obj.id);
      let FullMembers = memberList.filter((member:any)=>member.category==='Full').map((obj:any)=>obj.id);
      
      for(let i = 1; i <= TotalTeams; i+=1){
        tempMember = []
        let teamTemplate={
          "name":"",
          "isSelected":false,
          "members":[0]
        }
        for(let f = 1; f<= Front; f++)
          if(frontMembers.length > 0) 
            tempMember.push(frontMembers.splice(Math.floor(Math.random()*frontMembers.length),1)[0]);
        for(let f = 1; f<= Back; f++)
          if(backMembers.length > 0)
            tempMember.push(backMembers.splice(Math.floor(Math.random()*backMembers.length),1)[0]);
        for(let f = 1; f<= QA; f++)
          if(QAMembers.length > 0) 
            tempMember.push(QAMembers.splice(Math.floor(Math.random()*QAMembers.length),1)[0]);
        for(let f = 1; f<= DB; f++)
          if(DBMembers.length > 0) 
            tempMember.push(DBMembers.splice(Math.floor(Math.random()*DBMembers.length),1)[0]);
        
        if (tempMember.length < TotalMembers){
          let val =  TotalMembers-tempMember.length
          for(let f = 0; f<val; f++)
            if(FullMembers.length > 0) 
              tempMember.push(FullMembers.splice(Math.floor(Math.random()*FullMembers.length),1)[0])
        }
        teamTemplate.members = [...tempMember]
        teamTemplate.name = `Team ${i}`
        this._api.postTeams(teamTemplate).subscribe(data=>{
          teamIds.push(data.id)
          if(teamIds.length===TotalTeams){
            this.teamsCreated$.next(teamIds);
            this.teamsCreated$.complete();
          }
        }) 
      }


    })

    
  }

}