import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ApiServices } from './Services/api.service';

import {MatDialog} from '@angular/material/dialog';
import { CreateteamdialogueComponent } from './createteamdialogue/createteamdialogue.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  admin: boolean = false
  login: boolean = false;
  title = 'parody';
  constructor(private _data:ApiServices , private _router: ActivatedRoute) { }
  ngOnInit(): void {
    this._data.admin$.subscribe((data: any) => {
      this.admin = data;
    })

    this._data.loginStatus$.subscribe((data: any) => {
      this.login = data

    })
}

}

