import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ["https://d8it4huxumps7.cloudfront.net/images/home-page-banner/632857a4798c8_Rotating_banner__1_.jpg?d=1266x494",
  "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/630d9dc95b400_Rotating__3_.jpg?d=1266x494",
  "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/6320154c1ae5a_Rotating.jpg?d=1266x494"];
}
