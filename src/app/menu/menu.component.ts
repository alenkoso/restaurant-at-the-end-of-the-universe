import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public productList = [
    {name: 'Grilled space-whale steak with algae puree', type: 'Food', price: 66.50},
    {name: 'Tea substitute ', type: 'Food', price: 1.50},
    {name: 'Hagro biscuit', type: 'Food', price: 32.00},
    {name: 'Ameglian Major Cow casserole', type: 'Food', price: 55.75},
    {name: 'Pan Galactic Gargle Blaster', type: 'Food', price: 5.50},
    {name: 'Janx Spirit ', type: 'Food', price: 7.00},
    {name: 'Tzjin-anthony-ks', type: 'Food', price: 11.50},
  ];

  public cartProductList = [];
  public totalPrice: number = 0;
  @Output() orderedProducts = new EventEmitter();

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({name}) => name === product.name); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({...product, num:1}); // counter of our products
      this.totalPrice += product.price;
      return;
    }
    productExistInCart.num += 1;
  }
  removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
  }

  order() {
    console.log(this.cartProductList);
    console.log(this.totalPrice);

    //TODO send this to the kitchen
    this.orderedProducts.emit(this.cartProductList);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
