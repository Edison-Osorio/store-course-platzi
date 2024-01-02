import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() addToCard = new EventEmitter();

  addToCartHandler() {
    this.addToCard.emit(this.product);
  }
}
