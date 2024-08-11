import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  NamVar:string =""
  MobVar:string=""
  OTPVar:any = 0
 
  constructor(public LocVap:Location,
    public UrlVap: ActivatedRoute) {
      let state:any = LocVap.getState()
      this.OTPVar = state.OTPVak
  }
  ngOnInit()
  {
    this.NamVar = this.UrlVap.snapshot.params.NamVak;
    this.MobVar = this.UrlVap.snapshot.params.MobVak;
 
  }
 
}



