import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { NamSvsService } from './nam-svs.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGardCls implements CanActivate
{
  constructor(
    private service:NamSvsService){}

  canActivate()
  {
    return this.service.isLogin
  }
}