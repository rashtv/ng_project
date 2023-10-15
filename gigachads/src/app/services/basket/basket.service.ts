import {Injectable} from '@angular/core';
import {Drink} from "../../models/drink/drink";


type OrderedProduct = {
  drink: Drink;
  amount: number;
};
@Injectable({
  providedIn: 'root'
})

export class BasketService {
  constructor() {
  }
  private orderedProducts: OrderedProduct[] = []

  clear_basket() {
    this.orderedProducts = [];
  }
  add_to_basket(drink: Drink, amount: number) {
    for (let i of this.orderedProducts) {
      if (i.drink === drink) {
        i.amount += amount;
        if (i.amount >= 20) i.amount = 20;
        return;
      }
    }
    const item = {
      drink: drink,
      amount: amount
    }
    this.orderedProducts.push(item);
  }
  remove_from_basket(drink: OrderedProduct) {
    this.orderedProducts = this.orderedProducts.filter((product) => product !== drink)
  }
  get_from_basket() {
    return this.orderedProducts;
  }

}

