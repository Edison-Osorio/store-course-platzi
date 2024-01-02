import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  hideSideMenu = signal(true);

  private cartService = inject(CartService);

  cart = this.cartService.cart;
  total = this.cartService.total;
  toggleSideMenu() {
    this.hideSideMenu.update((statePrev) => !statePrev);
  }
}
