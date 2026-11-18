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
    { id: 2, name: 'book', price: 100 },
    { id: 3, name: 'dress', price: 400 },
  ];
  productsCopy: IProduct[] = this.products;
  isfiltered: boolean = false;
  add() {
    this.products.push({ id: this.products.length + 1, name: 'new product', price: 123 });
  }
  filter() {
    this.products = this.products.filter((p) => p.price > 1000);
    this.isfiltered = true;
  }
  showAllProducts() {
    this.isfiltered = false;
    this.products = this.productsCopy;
  }
}
