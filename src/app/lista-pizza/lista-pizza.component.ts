import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'app-lista-pizza',
  templateUrl: './lista-pizza.component.html',
  styleUrls: ['./lista-pizza.component.css']
})
export class ListaPizzaComponent implements OnInit {

  constructor(private servicio: ServicioService) { }
  public pizzas = [];
  public pizza = '';

  ngOnInit() {
    this.servicio.getAllPizzas().subscribe( pizzas => {
      console.log('PIZZAS', pizzas);
      this.pizzas = pizzas;
    });
  }

}
