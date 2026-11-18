import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  products: IProduct[] = [
    { id: 1, name: 'phone', price: 21000 },
    { id: 2, name: 'product 2', price: 100 },
    { id: 3, name: 'product 3', price: 400 },
  ];
  add() {
    this.products.push({ id: this.products.length + 1, name: 'new product', price: 123 });
  }
  filter() {
    this.products = this.products.filter((p) => p.price > 1000);
  }
}
