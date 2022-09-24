import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable()
export class ApiServices {
  url:string='http://localhost:3000';
  loginStatus$: any = new Subject();
  admin$: any = new Subject();

  constructor(private _http:HttpClient){}

  ngOnIt(){

  }

  getMembers():Observable<any>{
    return this._http.get<any>(this.url+'/members');
  }

  getAdmins():Observable<any>{
    return this._http.get<any>(this.url+'/admins');
  }

  getTeams():Observable<any>{
    return this._http.get<any>(this.url+'/teams');
  }
  postTeams(team:any):Observable<any>{
    return this._http.post<any>(this.url+'/teams',team);
  }

  getHackathon():Observable<any>{
    return this._http.get<any>(this.url+'/hackathons');
  }
  postHackathon(hackathon:any):Observable<any>{
    return this._http.get<any>(this.url+'/hackathons', hackathon);
  }

}