import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  products: IProduct[] = [{ id: 1, name: 'product 1', price: 123 }];
  add() {
    this.products.push({ id:this.products.length+1, name: 'new product', price: 123 });
  }
}
