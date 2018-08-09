import { LunaService } from '../../../services/luna.service';
import { Description } from '../../../model/description';
 import { Component, OnInit } from '@angular/core';
 import {Router , ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-description',
  templateUrl: './edit-description.component.html',
  styleUrls: ['./edit-description.component.css']
})
export class EditDescriptionComponent implements OnInit {
 
  id:string;
  description:Description; 
  constructor(public lunaService:LunaService ,
    public router:Router,
    public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.lunaService.getOneDescription(this.id).subscribe(description =>{ 
      this.description = description; 
    }); 
   }

  updateDescription(id:string){
    this.lunaService.updateDescription(this.id,this.description);
    this.router.navigate(['/description']);
  }
  deletItem(){
    this.lunaService.deleteDescription(this.id)  
  }
  
}
