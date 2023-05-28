import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  products: any = {
    name: '',
    price: 0,
  };
  constructor(private product: ProductService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.product.getProductById(id).subscribe((data) => {
        this.products = data;
      });
    });
  }
}
