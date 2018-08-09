import { Component, OnInit } from '@angular/core';
import { FlashMessagesService} from 'angular2-flash-messages';
import {Router   } from '@angular/router';
import {AuthService   } from '../../services/auth.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-ledft-menu',
  templateUrl: './ledft-menu.component.html',
  styleUrls: ['./ledft-menu.component.css']
})
export class LedftMenuComponent implements OnInit {

  isLogIn:boolean;
  isUserLogin:string;
  enableRegister:boolean;
 
  constructor(
    public router:Router,
    public authService:AuthService,
    public flashMessagesService:FlashMessagesService, 
  ) { }

  ngOnInit() {
  }

  logoutClick(){
    this.authService.logout();
    this.flashMessagesService.show( "Your are logged out !",{cssClass:'alert-success',timeout:6000});
    this.router.navigate(['/login']);
  }
}
