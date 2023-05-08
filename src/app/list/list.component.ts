import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(public _shared:SharedService){
  }
  Heros:any;
  ngOnInit(): void {

    this._shared.getHeros().subscribe(
      res=>{
        this.Heros=res;
        console.log(this.Heros);
        
      },
      err=>{
        console.log(err);
      }
    )

  }
  delete(id:any){
    this._shared.delete(id).subscribe(
      res=>{
        console.log(id);
        //get the new update 
        this.ngOnInit();
      },err=>{
        console.log(err);
        
      }
    )
  }
}
