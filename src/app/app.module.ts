import { AuthService } from './services/auth.service';
import { EditDescriptionComponent } from './admin-general/description/edit-description/edit-description.component';
 import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';  
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { LunaService } from './services/luna.service';
import { AdminComponent } from './admin-general/admin/admin.component';
import { AdminGeneralComponent } from './admin-general/admin-general.component';
import { LedftMenuComponent } from './admin-general/ledft-menu/ledft-menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditComponent } from './admin-general/admin/edit/edit.component';
import { DescriptionComponent } from './admin-general/description/description.component';
import { PackagesComponent } from './admin-general/packages/packages.component';
import { EditPackjeComponent } from './admin-general/packages/edit/packje/packje.component';
import { AddressComponent } from './admin-general/address/address.component';
import { EditAddressComponent } from './admin-general/address/edit-address/edit-address.component';
import { MessageComponent } from './admin-general/message/message.component';
import { DeleteMessageComponent } from './admin-general/message/delete-message/delete-message.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { SendMessageComponent } from './components/send-message/send-message.component';

const routes: Routes = [ 
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },  
  { path: 'contact', component: ContactComponent },  
  { path: 'admin', component: AdminComponent,canActivate:[AuthGuard] },  
  { path: 'description', component: DescriptionComponent,canActivate:[AuthGuard] },  
  { path: 'package', component: PackagesComponent,canActivate:[AuthGuard] },  
  { path: 'address', component: AddressComponent ,canActivate:[AuthGuard] },  
  { path: 'message', component: MessageComponent,canActivate:[AuthGuard] },  
  { path: 'edit-title/:id', component: EditComponent,canActivate:[AuthGuard] },  
  { path: 'edit-desctiption/:id', component: EditDescriptionComponent,canActivate:[AuthGuard] }, 
  { path: 'edit-packageee/:id', component: EditPackjeComponent,canActivate:[AuthGuard] },  
  { path: 'edit-address/:id', component: EditAddressComponent,canActivate:[AuthGuard] },  
  { path: 'send', component: SendMessageComponent},
]; 
const firebaseConfig = {
  apiKey: "AIzaSyBZH55O4wV45YJAUzkJ-MBr_mYppXn5TKA",
  authDomain: "luna-bc6f3.firebaseapp.com",
  databaseURL: "https://luna-bc6f3.firebaseio.com",
  projectId: "luna-bc6f3",
  storageBucket: "",
  messagingSenderId: "8089238597"
};

@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent, 
    LoginComponent,
    NavbarComponent,
    ContactComponent,
    AdminComponent,
    EditComponent,
    AdminGeneralComponent,
    DescriptionComponent,
    LedftMenuComponent,
    EditDescriptionComponent,
    PackagesComponent,
    EditPackjeComponent,
    AddressComponent,
    EditAddressComponent,
    MessageComponent,
    DeleteMessageComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    FlashMessagesModule ,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig), 
   ],
  providers: [
    AngularFireModule,
    AngularFireAuth ,
    AngularFireDatabase,
    AuthGuard, 
    LunaService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
