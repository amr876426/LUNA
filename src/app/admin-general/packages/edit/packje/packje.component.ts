import { Packages } from './../../../../model/description';
import { LunaService } from '../../../../services/luna.service';
import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-packje',
  templateUrl: './packje.component.html',
  styleUrls: ['./packje.component.css']
})
export class EditPackjeComponent implements OnInit {

  id:string;
  packagee:Packages; 
  constructor(public lunaService:LunaService ,
    public router:Router,
    public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.lunaService.getOnePackageg(this.id).subscribe(packagee =>{ 
      this.packagee = packagee; 
    });
   }

   updatePackgee(id:string){
    this.lunaService.updatePackges(this.id,this.packagee);
    this.router.navigate(['/package']);
  }
  deletItem(){
    this.lunaService.deletePackge(this.id)  
  }
}