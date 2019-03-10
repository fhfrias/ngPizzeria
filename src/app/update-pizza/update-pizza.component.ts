import { Component, OnInit, Input } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';
import { Pizza } from '../modelos/pizza';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-update-pizza',
  templateUrl: './update-pizza.component.html',
  styleUrls: ['./update-pizza.component.css']
})
export class UpdatePizzaComponent implements OnInit {

  constructor(private servicio: ServicioService, private router:Router) { }
  private pizzas;
  private pizzaUpdate: Pizza;
  @Input() pizza = { nombre: '', ingredientes: '', calidad: '', precio: 0, id: '' };
  
  ngOnInit() {
    this.getListPizzas();
  }

  getListPizzas(){
    this.servicio.getAllPizzas().subscribe( pizzas =>{
      this.pizzas = pizzas;
    })
  }

  onFormularioUpdatePizza(idPizza: string){
    this.servicio.getPizza(idPizza).subscribe( pizza => {
      console.log('PIZZAS', pizza);
      this.pizzaUpdate = pizza;
    });

    this.pizza.nombre = this.pizzaUpdate.nombre;
    this.pizza.ingredientes = this.pizzaUpdate.ingredientes;
    this.pizza.calidad = this.pizzaUpdate.calidad;
    this.pizza.precio = this.pizzaUpdate.precio;
    this.pizza.id = this.pizzaUpdate.id;
  }

  modificarPizza(){
    this.servicio.updatePizza(this.pizza);
  }

}


