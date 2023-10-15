import { Component } from '@angular/core';
import {BasketService} from "../../../services/basket/basket.service";
import {Drink} from "../../../models/drink/drink";


type OrderedProduct = {
  drink: Drink;
  amount: number;
};

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})

export class BasketComponent {
  constructor(private basket: BasketService) {
  }

  orderedProducts: OrderedProduct[] = []

  ngOnInit() {
    this.getOrder();
  }

  getOrder() {
    this.orderedProducts = this.basket.get_from_basket();
    console.log(this.orderedProducts);
  }

  buyOrder() {
    if(this.orderedProducts.length) {
      this.basket.clear_basket();
      this.getOrder();
    }
  }

  removeOrder(order: OrderedProduct) {
    this.basket.remove_from_basket(order);
    this.getOrder();
  }

}
