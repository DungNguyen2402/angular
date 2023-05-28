import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interfaces/Product';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent {
  product: any = {
    name: '',
    price: '',
  };

  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
  });

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.router.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe((product) => {
        this.product = product;
        this.productForm.patchValue({
          name: product.name,
          price: product.price,
        });
      });
    });
  }
  onHandleSubmit() {
    if (this.productForm.invalid) return;

    const product: IProduct = {
      id: this.product.id,
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
    };
    this.productService.updateProduct(product).subscribe((data) => {
      console.log(data);
    });
  }
}
