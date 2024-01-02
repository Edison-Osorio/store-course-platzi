
import { Component, Input, OnChanges, inject, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Category } from '../../../shared/models/category.model';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { CategoryService } from '../../../shared/services/category.service';
import { ProductService } from '../../../shared/services/product.service';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    HeaderComponent,
    RouterLinkWithHref
],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export default class ListComponent implements OnChanges {
  @Input() categoryId!: string;
  products = signal<Product[]>([]);
  categorys = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.getCategorys();
  }

  ngOnChanges() {
    this.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  getProducts() {
    this.productService.getProducts(this.categoryId).subscribe({
      next: (product) => {
        this.products.set(product);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  getCategorys() {
    this.categoryService.getAll().subscribe({
      next: (categorys) => {
        this.categorys.set(categorys);
      },
    });
  }
}
