import { Component } from '@angular/core';
import { NamSvsService } from '../nam-svs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  constructor(public namService:NamSvsService, public NavVap:Router){

  }
logoutFnc(){
  this.namService.isLogin=false
  this.namService.userName=""
  this.NavVap.navigate(['/'])
}
}
