import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }


  getProducts(): void{
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  delete(product: Product): void{
    this.products = this.products.filter(p=> p!=product);
    this.productService.deleteProduct(product).subscribe();
  }

  add(name: string, price: number): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.addProduct({ name, price } as Product)
      .subscribe(product => {
        this.products.push(product);
      });
  }
}
