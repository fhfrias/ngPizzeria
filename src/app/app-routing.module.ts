import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPizzaComponent } from './lista-pizza/lista-pizza.component';
import { AltaPizzaComponent } from './alta-pizza/alta-pizza.component';
import { EliminarPizzaComponent } from './eliminar-pizza/eliminar-pizza.component';
import { UpdatePizzaComponent } from './update-pizza/update-pizza.component';

const routes: Routes = [
  {
    path: '',
    component: ListaPizzaComponent
  },
  {
    path: 'lista',
    component: ListaPizzaComponent
  },
  {
    path: 'nuevo',
    component: AltaPizzaComponent
  },
  {
    path: 'eliminar',
    component: EliminarPizzaComponent
  },
  {
    path: 'update',
    component: UpdatePizzaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
