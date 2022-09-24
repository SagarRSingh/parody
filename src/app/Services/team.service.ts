import { Injectable, OnInit } from "@angular/core";
import { ApiServices } from "./api.service";

// enum Category {
//   Front,
//   Back,
//   QA,
//   DB,
//   Full
// }

@Injectable()
export class TeamServices implements OnInit{

  constructor(private _api:ApiServices){}

  ngOnInit(): void {}

  generateTeams(obj:{Front:number,Back:number,QA:number,DB:number,TotalMembers:number,TotalTeams:number}){
    let teamTemplate = {
      "name":"",
      "isSelected":false,
      "members":[]
    };
    let tempMember:number[];
    this._api.getMembers().subscribe(memberList=>{
      let frontMembers = memberList.filter((member:any)=>member.category==='Front');
      let backMembers = memberList.filter((member:any)=>member.category==='Back');
      let QAMembers = memberList.filter((member:any)=>member.category==='QA');
      let DBMembers = memberList.filter((member:any)=>member.category==='DB');
      let FullMembers = memberList.filter((member:any)=>member.category==='Full');

      for()

      if(frontMembers.length > 0) tempMember.push(frontMembers.pop())
      if(backMembers.length > 0) tempMember.push(frontMembers.pop())
      if(QAMembers.length > 0) tempMember.push(frontMembers.pop())
      if(DBMembers.length > 0) tempMember.push(frontMembers.pop())

      console.log(tempMember)
    })
  }

}