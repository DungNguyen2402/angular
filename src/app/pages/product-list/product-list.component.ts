import { Component } from '@angular/core';
import { IProduct } from '../interfaces/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: IProduct[] = [];
  constructor(private product: ProductService) {
    this.product.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  removeItem(id: any) {
    const confirm = window.confirm('Are you remove item !');
    if (confirm) {
      this.product.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter((item) => item.id !== id);
      });
    }
  }
}
