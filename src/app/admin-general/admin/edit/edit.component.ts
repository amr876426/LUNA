import { LunaService } from '../../../services/luna.service';
import { TitleHome } from '../../../model/description';
 import { Component, OnInit } from '@angular/core';
 import {Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:string;
  titleHome:TitleHome; 
  constructor(public lunaService:LunaService ,
    public router:Router,
    public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.lunaService.getonetitlehome(this.id).subscribe(titleHome =>{ 
      this.titleHome = titleHome; 
    }); 
   }

  updateTitlle(){
    this.lunaService.updateTitleHome(this.id,this.titleHome);
    this.router.navigate(['/admin']);
  }
  deletItem(){
    this.lunaService.deletetitlesHome(this.id);
    this.router.navigate(['/admin']);
  }
 
  

}
