import { Component } from '@angular/core';
import { NamSvsService } from '../nam-svs.service';
@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  constructor(public namService:NamSvsService){
    
  }

}
