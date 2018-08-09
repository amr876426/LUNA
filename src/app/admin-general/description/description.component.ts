import { Description } from './../../model/description';
import { LunaService } from '../../services/luna.service';
import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  id:string;
  descriptions:Description[]; 
  description:Description;
  constructor( public lunaService:LunaService ,
    public router:Router,
    public activatedRoute:ActivatedRoute)  { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.lunaService.getDesciption().subscribe(descriptions => {this.descriptions = descriptions });  
  }
  deletItem(){
    this.lunaService.deleteDescription(this.id)  
  }
}
