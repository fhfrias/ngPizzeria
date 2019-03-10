import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Pizza } from '../modelos/pizza';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private afs: AngularFirestore) { 
    this.pizzasCollection = afs.collection<Pizza>('pizzas');
    this.pizzas = this.pizzasCollection.valueChanges();
  }

  private pizzasCollection: AngularFirestoreCollection<Pizza>;
  private pizzaDoc: AngularFirestoreDocument<Pizza>;
  private pizzas: Observable<Pizza[]>;
  private pizza: Observable<Pizza>;

  getAllPizzas(){
    return this.pizzas = this.pizzasCollection.snapshotChanges().pipe(map(changes => {
      return changes.map( action =>{
        const data = action.payload.doc.data() as Pizza;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
  getPizza(idPizza: string) {
    this.pizzaDoc = this.afs.doc<Pizza>(`pizzas/${idPizza}`);
    return this.pizza = this.pizzaDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Pizza;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addPizza(pizza: Pizza): void{
    this.pizzasCollection.add(pizza);
  }
  updatePizza(pizza: Pizza): void {
    let idPizza = pizza.id;
    this.pizzaDoc = this.afs.doc<Pizza>(`pizzas/${idPizza}`);
    this.pizzaDoc.update(pizza);
  }
  deletePizza(idPizza: string): void {
    this.pizzaDoc = this.afs.doc<Pizza>(`pizzas/${idPizza}`);
    this.pizzaDoc.delete();
  }
}
