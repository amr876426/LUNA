import { LunaService } from './../../services/luna.service';
import { Description, TitleHome, Packages, Addreess, Contact } from './../../model/description';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from "angular2-flash-messages";




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  descriptions:Description[];
  titlesHome:TitleHome[];
  packages:Packages[];
  addreess:Addreess[];
  contact={
    name :"",
    mobile:"",
    email:"",
    message:"",
    package:"",
  }; 
  
  // email:string;
  // message:string;
  // mobile:number;
  // name:string;
  // package:string
  
//   click(ev){
//     this.package = (ev.target.defaultValue);
//  }
  constructor( public lunaService:LunaService ,
    public fashMessagesService : FlashMessagesService,
      public router:Router , 
  )  { }

  ngOnInit() {
    this.lunaService.getDesciption().subscribe(descriptions => {this.descriptions = descriptions }); 
    this.lunaService.getTitleHome().subscribe(titlesHome => {this.titlesHome = titlesHome }); 
    this.lunaService.getPackages().subscribe(packages => {this.packages = packages }); 
    this.lunaService.getaddress().subscribe(addreess => {this.addreess = addreess }); 
  }
  

  mySubmit({value,valid}:{value:Contact,valid:boolean}){

if (!valid) {
  this.fashMessagesService.show('Please write correct info',{cssClass:'alert-danger',timeout:6000});
 
}else{
  this.lunaService.addContacts(value);
  this.fashMessagesService.show('Thanks new employee added successfully !',{cssClass:'alert-success',timeout:6000});
 
}
  }

}