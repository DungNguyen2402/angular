import { Component } from '@angular/core';
import { IProduct } from '../interfaces/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  products: IProduct[] = [];
  constructor(private product: ProductService) {
    this.product.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
