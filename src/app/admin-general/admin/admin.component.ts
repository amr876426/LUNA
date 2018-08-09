import { LunaService } from '../../services/luna.service';
import { Description, TitleHome, Packages, Addreess } from '../../model/description';
import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id:string; 
  descriptions:Description[];
  titlesHome:TitleHome[];
  packages:Packages[];
  addreess:Addreess[]; 
  constructor( public lunaService:LunaService ,
  
    public router:Router,
    public activatedRoute:ActivatedRoute)  { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.lunaService.getDesciption().subscribe(descriptions => {this.descriptions = descriptions }); 
    this.lunaService.getTitleHome().subscribe(titlesHome => {this.titlesHome = titlesHome }); 
    this.lunaService.getPackages().subscribe(packages => {this.packages = packages }); 
    this.lunaService.getaddress().subscribe(addreess => {this.addreess = addreess }); 

  }

  
}
 