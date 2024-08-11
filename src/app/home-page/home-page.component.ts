import { Component, Directive } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsPageComponent } from '../news-page/news-page.component';
import { FormsModule, NgForm,NgModel } from '@angular/forms';
import { NamSvsService } from '../nam-svs.service';
 
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NewsPageComponent,FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
//commentVar:string=""
commentVar = ""
commentAryVar:any = {}
SelectedNews = ""
constructor(
  public namService:NamSvsService,
  public NavVap : Router,
    public UrlMap: ActivatedRoute) {}

    LoginFnc()
    {
      this.namService.isLogin = true
      this.namService.userName = "nidhi"
      this.NavVap.navigate(["/about"])
    }
  
SelectMeFnc(EvtRsgVar:string){
  this.SelectedNews = EvtRsgVar
}


  GotoPageFnc()
  {
    this.NavVap.navigate(["user/Nidhi/mobile/8675"],
      {
        replaceUrl: true,
        state: { OTPVak: 7654 }
      });
  }
  addCommentFnc(commentVav: NgModel)
  {
    if(this.commentAryVar[this.SelectedNews])
      this.commentAryVar[this.SelectedNews].push(this.commentVar)
    else
    this.commentAryVar[this.SelectedNews] = [this.commentVar]
    commentVav.reset()
  }

 
  
}





