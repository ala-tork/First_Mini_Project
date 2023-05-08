import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';
import { hero } from '../model/Hero.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor( private _share:SharedService, private r:ActivatedRoute){
  }
  Hero:any=new hero;
  ngOnInit(): void {
    this._share.getHerById(this.r.snapshot.paramMap.get('id')).subscribe(
    res=>{
        this.Hero=res;
      },err=>{
        console.log(err);
        
      }
    )
  }

}
