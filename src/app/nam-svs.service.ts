import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamSvsService {

  isLogin = false
  userName = ""

  constructor() {
    let data = localStorage.getItem("login")
    if(data)
    {
      this.isLogin = !!data
    }
  }
 
  onInit(){
   
  }
 
  loginFnc()
  {
    this.isLogin = true
    this.userName = "Nidhi"
    localStorage.setItem("login", this.isLogin+"")
  }
 
  logoutFnc()
  {
    this.isLogin = false
    this.userName = ""
    localStorage.setItem("login", "")
  }
}