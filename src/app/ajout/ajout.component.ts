import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

import { hero } from '../model/Hero.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  //inject the service
  constructor(public _Shared:SharedService, private router:Router){
  }
    //create object
  Hero = new hero;
    /*
  save() {
    //use the chared table from service
    this._Shared.Heros.push(this.Hero);
    this.Hero={
      name:"",
      image:"",
      power:""
    }
  }*/
  save(){
    //subscribe nwali na9ra el resultat
   this._Shared.createHero(this.Hero).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(["/list"])
        //this.router.navigate(["/list"]);
        
      },
      err=>{
        console.log(err);
        
      }
    )
  }
  ngOnInit(): void {}


}
