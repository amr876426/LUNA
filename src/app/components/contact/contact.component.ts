import { LunaService } from '../../services/luna.service';
import { Contact } from '../../model/description';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts :Contact[];

  constructor( public lunaService:LunaService) { }

  ngOnInit() {
    this.lunaService.getcontacts().subscribe(contacts => {this.contacts = contacts }); 

  }

}
