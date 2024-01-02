import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Product } from '../../../shared/models/product.model';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);
  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=212',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=213',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=21',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=2123',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=212',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=2133',
        creationAt: new Date().toISOString(),
      },
    ];

    this.products.set(initProducts);
  }
  addToCart(product: Product) {
    this.cart.update((prevState) => [...prevState, product]);
  }
}
