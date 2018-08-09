import { LunaService } from '../../services/luna.service';
import { Contact } from '../../model/description';
import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  contacts:Contact[];
  constructor( public lunaService:LunaService ,
  
    public router:Router,
    public activatedRoute:ActivatedRoute)  { }

  ngOnInit() {
    this.lunaService.getcontacts().subscribe(contacts => {this.contacts = contacts }); 

  }


}
