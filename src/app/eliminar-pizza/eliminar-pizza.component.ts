import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';
import { Pizza } from '../modelos/pizza';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-eliminar-pizza',
  templateUrl: './eliminar-pizza.component.html',
  styleUrls: ['./eliminar-pizza.component.css']
})
export class EliminarPizzaComponent implements OnInit {

  constructor(private servicio: ServicioService) { }
  private pizzas;
  
  ngOnInit() {
    this.getListPizzas();
  }

  getListPizzas(){
    this.servicio.getAllPizzas().subscribe( pizzas =>{
      this.pizzas = pizzas;
    })
  }

  onDeletePizza(idPizza: string): void{
    this.servicio.deletePizza(idPizza);
  }

}
