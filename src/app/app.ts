import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingComponent } from './lessons/01-component-basic/greeting.component';
import { Product } from './practice/models/product.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GreetingComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Mimeo');
  protected readonly product: Product = { id: 1, name: 'Sản phẩm mẫu', price: 100 };
  protected readonly count = signal(0);
  protected increment(): void {
    this.count.update(c => c + 1);
  }
}
