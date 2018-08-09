import { LunaService } from '../../services/luna.service';
import { Description, TitleHome, Packages, Addreess } from '../../model/description';
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addreess:Addreess[]; 
  constructor( public lunaService:LunaService ,
    public router:Router,
    public activatedRoute:ActivatedRoute)  { }

  ngOnInit() {
    this.lunaService.getaddress().subscribe(addreess => {this.addreess = addreess });
  }
}
