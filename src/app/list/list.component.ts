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
      this._shared.searchBarTouched$.subscribe(
        (value => {
          if (value.length === 0) {
            this._shared.getHeros().subscribe(
              res => {
                this.Heros = res;
              })
          } else {
            console.log("else")
            this._shared.searchByName(this._shared.searchInput).subscribe(
              res => {
                this.Heros = res;
              })
          }
        })
      
    );console.log(this.Heros);

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
