import { Description, TitleHome, Packages, Addreess,Contact } from './../model/description';
import { Injectable } from '@angular/core';
import { AngularFireDatabase , FirebaseListObservable ,FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()
export class LunaService {
  descriptions: FirebaseListObservable<any[]>;
  description: FirebaseObjectObservable<any>;
  titlesHome : FirebaseListObservable<any[]>;
  titleHome:  FirebaseObjectObservable<any>;
  packages : FirebaseListObservable<any[]>;
  packagee:  FirebaseObjectObservable<any>;
  Addreess : FirebaseListObservable<any[]>;
  Addrees:  FirebaseObjectObservable<any>;
  contacts : FirebaseListObservable<any[]>;
  contact:  FirebaseObjectObservable<any>;
  selectedHomeTitle:   TitleHome[];
  constructor(public af:AngularFireDatabase) {
    this.descriptions = this.af.list('description') as FirebaseListObservable<Description[]>;
    this.titlesHome = this.af.list('title-home') as FirebaseListObservable<TitleHome[]>;
    this.packages = this.af.list('packages') as FirebaseListObservable<Packages[]>;
    this.Addreess = this.af.list('address') as FirebaseListObservable<Addreess[]>;
    this.contacts = this.af.list('contact') as FirebaseListObservable<Contact[]>;
    
   }
 
  getDesciption(){
    return this.descriptions;
  }  
  getTitleHome(){
    return this.titlesHome;
  }
  getPackages(){
    return this.packages;
  }
  getaddress(){
    return this.Addreess;
  }
  getcontacts(){
    return this.contacts;
  }

   
  getonetitlehome(id:any){
    this.titleHome = this.af.object('title-home/'+id) as FirebaseObjectObservable<TitleHome>;
    return this.titleHome;
  }
  getOnePackageg(id:string){
    this.packagee = this.af.object('packages/'+id) as FirebaseObjectObservable<Packages>;
    return this.packagee;
  }
    getOneDescription(id:string){
    this.description = this.af.object('description/'+id) as FirebaseObjectObservable<Description>;
    return this.description;
  }
  getOneAddress(id:string){
    this.Addrees = this.af.object('address/'+id) as FirebaseObjectObservable<Addreess>;
    return this.Addrees;
  }
  
  

  updateTitleHome(id:any, titleHome:TitleHome){
    return this.titlesHome.update(id,titleHome);
  }
  updateDescription(id:string, description:Description){    
    return this.descriptions.update(id,description);
  }
  updatePackges(id:string, packagee:Packages){
    return this.packages.update(id,packagee);

  }
  updateAddres(id:string, Addrees:Addreess){    
    return this.Addreess.update(id,Addrees);
  }
  
  addDescription(description:Description){
    return this.descriptions.push(description);
  }

  addPackges(packagee:Packages){
    return this.packages.push(packagee);
  }

  addContacts(contact:Contact){
    return this.contacts.push(contact);
  }
  
  addTitlesHome(titleHome:TitleHome){
    return this.titlesHome.push(titleHome);
  }
  
  deletetitlesHome(id:string){
    return this.titlesHome.remove(id);
  }
  deleteDescription(id:string){
    return this.descriptions.remove(id);
  }
  deletePackge(id:string){
    return this.packages.remove(id);
  }
  deleteddress(id:string){
    return this.Addreess.remove(id);
  }


}
