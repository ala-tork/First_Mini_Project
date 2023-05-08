import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http :HttpClient) {}
  private url='http://127.0.0.1:3000/';

  public Heros:any;
//get all heros
  getHeros(){
    return this.http.get(this.url+"hero/all");
  }

  //create hero
  createHero(hero:any){
    return this.http.post(this.url+"hero/ajout",hero);
  }
  //delete hero
  delete(id:any){
    return this.http.delete(this.url+"hero/Delete/"+id);
  }

  getHerById(id:any){
    return this.http.get(this.url+"hero/getbyid/"+id);
  }
  
  update(id:any,hero:any){
    return this.http.put(this.url+"hero/update/"+id,hero);
  }
}
