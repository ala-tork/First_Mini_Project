import { Component } from '@angular/core';
import { hero } from '../model/Hero.component';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private _shared:SharedService,private r:ActivatedRoute , private router:Router){

  }
  Hero:any=new hero;
  id:any;
  ngOnInit(): void {
    //console.log(this.r.snapshot.paramMap.get('id'));
    this.id=this.r.snapshot.paramMap.get('id');
    this._shared.getHerById(this.id).subscribe(
      res=>{
          this.Hero=res;
      },err=>{
        console.log(err);
      }
    );
  }
  edite(){
      this._shared.update(this.id,this.Hero).subscribe(
        res=>{
          this.Hero=res;
          this.router.navigate(["/list"])
        },err=>{
          console.log(err);
          
        }
      )
  }

}
