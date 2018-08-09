import { LunaService } from '../../../services/luna.service';
import { Addreess } from '../../../model/description';
 import { Component, OnInit } from '@angular/core';
 import {Router , ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  id:string;
  addrees:Addreess
  constructor(public lunaService:LunaService ,
    public router:Router,
    public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.lunaService.getOneAddress(this.id).subscribe(addrees =>{ 
      this.addrees = addrees; 
    });
   }

   updateAddress(id:string){
    this.lunaService.updateAddres(this.id,this.addrees);
    this.router.navigate(['/address']);
  }


}
