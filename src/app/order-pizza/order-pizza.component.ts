import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit {

  pizza:any=[];
  constructor(private service:PizzaService){}
  ngOnInit()
  {
    this.service.getAllPizza().subscribe((data:any)=>{
      console.log("Data received as "+data);
      this.pizza=data;
    })
  }
  addToCart(){
    alert("Successfully added to cart");
  }
}
