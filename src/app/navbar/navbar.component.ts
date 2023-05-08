import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private _shared: SharedService) {

  }
  HeroName: string = "";


  search() {
    this._shared.searchInput = this.HeroName;
    this._shared.searchBarTouchedSubject.next(this.HeroName);
  }
}
