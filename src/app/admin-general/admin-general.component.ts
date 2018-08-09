import { LunaService } from '../services/luna.service';
import { Description, TitleHome, Packages, Addreess } from '../model/description';
import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute , Params } from '@angular/router';
@Component({
  selector: 'app-admin-general',
  templateUrl: './admin-general.component.html',
  styleUrls: ['./admin-general.component.css']
})
export class AdminGeneralComponent implements OnInit {
  id:any;

  descriptions:Description[];
  titlesHome:TitleHome[];
  packages:Packages[];
  addreess:Addreess[];
  titleHome:TitleHome;
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
  updateTitlle(id:any){
    this.lunaService.updateTitleHome(this.id,this.titleHome);
    this.router.navigate(['/admin']);
  }
}
