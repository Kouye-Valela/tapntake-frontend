import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  [x: string]: any;
  private _router: any;

  constructor(//private_home:HomeComponent,
              private_activatedRoute: ActivatedRoute,
              private_router: Router){ 

}

  ngOnInit(): void { 
  
  }

}
