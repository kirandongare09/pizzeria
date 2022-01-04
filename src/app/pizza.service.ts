import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  
  constructor(private http:HttpClient) { }
  getAllIngredients()
  {
    return this.http.get("http://localhost:3000/ingredients");
  }

  getAllPizza()
  {
    return this.http.get("http://localhost:3000/Pizza");
    
    
  }
}
