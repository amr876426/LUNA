import { LunaService } from '../../services/luna.service';
import { Description, TitleHome, Packages, Addreess } from '../../model/description';
import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  packages:Packages[];
  id:string;
  constructor( public lunaService:LunaService ,
  
    public router:Router,
    public activatedRoute:ActivatedRoute)  { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.lunaService.getPackages().subscribe(packages => {this.packages = packages }); 
  }
}
