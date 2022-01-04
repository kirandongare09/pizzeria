import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
@Component({
  selector: 'app-build-ur-pizza',
  templateUrl: './build-ur-pizza.component.html',
  styleUrls: ['./build-ur-pizza.component.css']
})
export class BuildUrPizzaComponent implements OnInit {
  totalCost :any = 0;
  ingredients:any=[];
  addedIngredients:any=[];
  
  constructor(private service:PizzaService){}
  ngOnInit()
  {
    this.service.getAllIngredients().subscribe((data:any)=>{
      console.log("Data received as "+data);
      this.ingredients=data;
    })
  }

  addOrRemoveIngredient(ingredient:any){
    ingredient.added = ingredient.added!=undefined? !ingredient.added : true ;
    
    console.log(ingredient.price);
    
      if(ingredient.added)
        this.totalCost+=ingredient.price
      else
        this.totalCost-=ingredient.price
    
  }
  build(){
    alert("Dear Your request is submitted we serve you in few minutes")
  }
}
