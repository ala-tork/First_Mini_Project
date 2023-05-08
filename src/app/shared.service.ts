import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hero } from './model/Hero.component';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  private url = 'http://127.0.0.1:3000/';

  searchBarTouchedSubject = new BehaviorSubject<String>("");
  searchBarTouched$ = this.searchBarTouchedSubject.asObservable();

  searchInput!: string;

  public Heros: any;
  /* heros: hero[] = [
    {
      name: "lufi",
      power: 90,
      description: "a hero with a strong power",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4a-Icuoy_0K_521KlImvBZZs40C-zFT-XJc-PBZUSpA&s"
    },
    {
      name: "superman",
      power: 100,
      description: "a hero with a strong power",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtzd6hc8fvIXXpkJCgn6VguOL-qtddnFr6ZfRolHI2g&s"
    },
    {
      name: "spiderman",
      power: 80,
      description: "a hero with a strong power",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8WRyUq7ARFnDRQcqLv3izNOCz3xlxon6TeV0Cbkt&s"
    },
    {
      name: "batman",
      power: 600,
      description: "a hero with a strong power",
      image: "https://i.guim.co.uk/img/media/006e580ef0ee8c46c17b265f2bf66e7f0c61b746/3436_0_8487_5097/master/8487.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=5e699cfa7418864b866e22813ec44275"
    },
    {
      name: "lufi",
      power: 90,
      description: "a hero with a strong power",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4a-Icuoy_0K_521KlImvBZZs40C-zFT-XJc-PBZUSpA&s"
    },
    {
      name: "superman",
      power: 100,
      description: "a hero with a strong power",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtzd6hc8fvIXXpkJCgn6VguOL-qtddnFr6ZfRolHI2g&s"
    },
    {
      name: "spiderman",
      power: 80,
      description: "a hero with a strong power",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8WRyUq7ARFnDRQcqLv3izNOCz3xlxon6TeV0Cbkt&s"
    },
    {
      name: "batman",
      power: 600,
      description: "a hero with a strong power",
      image: "https://i.guim.co.uk/img/media/006e580ef0ee8c46c17b265f2bf66e7f0c61b746/3436_0_8487_5097/master/8487.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=5e699cfa7418864b866e22813ec44275"
    },
    {
      name: "lufi",
      power: 90,
      description: "a hero with a strong power",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4a-Icuoy_0K_521KlImvBZZs40C-zFT-XJc-PBZUSpA&s"
    },
    {
      name: "superman",
      power: 100,
      description: "a hero with a strong power",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtzd6hc8fvIXXpkJCgn6VguOL-qtddnFr6ZfRolHI2g&s"
    },
    {
      name: "spiderman",
      power: 80,
      description: "a hero with a strong power",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8WRyUq7ARFnDRQcqLv3izNOCz3xlxon6TeV0Cbkt&s"
    },
    {
      name: "batman",
      power: 600,
      description: "a hero with a strong power",
      image: "https://i.guim.co.uk/img/media/006e580ef0ee8c46c17b265f2bf66e7f0c61b746/3436_0_8487_5097/master/8487.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=5e699cfa7418864b866e22813ec44275"
    },

  ] */
  //get all heros
  getHeros() {
    return this.http.get(this.url + "hero/all");
    /* return of(this.heros) */
  }

  //create hero
  createHero(hero: any) {
    return this.http.post(this.url + "hero/ajout", hero);
  }
  //delete hero
  delete(id: any) {
    return this.http.delete(this.url + "hero/Delete/" + id);
  }

  getHerById(id: any) {
    return this.http.get(this.url + "hero/getbyid/" + id);
  }

  update(id: any, hero: any) {
    return this.http.put(this.url + "hero/update/" + id, hero);
  }

  searchByName(heroName: string): Observable<hero[]> {
    return this.http.get<hero[]>(`${this.url}/search?heroName=${heroName}`);
  }
  /* searchByName(heroName: string): Observable<hero[]> {
    return of(this.heros).pipe(
      map(heros => {
        return heros.filter(hero => hero.name.toLocaleLowerCase().startsWith(this.searchInput.toLocaleLowerCase()))
      })
    )
  } */
}
