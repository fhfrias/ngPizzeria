import { Component, OnInit, Input } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';
import { Pizza } from '../modelos/pizza';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent implements OnInit {

  constructor(private servicio: ServicioService, private router: Router) { }
  @Input() pizza = { nombre: '', ingredientes: '', calidad: '', precio: 0 };
  
  ngOnInit() {
    
  }

  addPizza(){
    this.servicio.addPizza(this.pizza)
    this.router.navigate(['/lista']);
  }

}
