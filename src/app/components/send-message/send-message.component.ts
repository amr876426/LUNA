import { LunaService } from './../../services/luna.service';
import { Contact } from './../../model/description';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  contact={
    name :"",
    mobile:"",
    email:"",
    message:"",
    package:"",
  }; 
  package;
  constructor( public lunaService:LunaService ,
    public fashMessagesService : FlashMessagesService,
      public router:Router , 
  )  { }

  ngOnInit() {
  }
  click(ev){
    this.package = (ev.target.defaultValue);
 }

  mySubmit({value,valid}:{value:Contact,valid:boolean}){
    if (!valid) {
      this.fashMessagesService.show('Please write correct info',{cssClass:'thanks',timeout:3000});
      this.router.navigate(['/send']);
    
    }else{
      this.lunaService.addContacts(value);
      this.fashMessagesService.show('Thanks new employee added successfully !',{cssClass:'thanks',timeout:3000});
      this.router.navigate(['/']);
    }
      }
    
    }
  
