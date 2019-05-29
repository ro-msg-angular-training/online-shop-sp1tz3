import { Injectable } from '@angular/core';
import { Product } from './product';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  
  createDb(){
    const PRODUCTS = [
      {id: 0, name: 'memory0', price: 20},
      {id: 1, name: 'mem1', price: 40},
      {id: 2, name: 'm2', price: 100},
      {id: 3, name: '3', price: 0}
    ];
    return PRODUCTS;
  }

  genId(products: Product[]): number {
    return products[products.length-1].id + 1;
  }


}
