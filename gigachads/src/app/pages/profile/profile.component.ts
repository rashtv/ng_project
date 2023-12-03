import { Component, ViewChild } from '@angular/core';
import { BasketService } from 'src/app/services/basket/basket.service';
import { Drink } from 'src/app/models/drink/drink';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/user/user';
import { BasketComponent } from 'src/app/components/organism/basket/basket.component';

type OrderedProduct = {
  drink: Drink;
  amount: number;
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  constructor(private basket: BasketService, private login: LoginService) {}

  @ViewChild(BasketComponent) basketComponent!: BasketComponent;

  orderedProducts: OrderedProduct[] = [];
  curUser!: User;

  ngOnInit() {
    this.getOrder();
  }
  
  async getUser() {
    this.curUser = await this.login.getCurrentUser();
    this.orderedProducts = await this.curUser.basket;
  }

  buyOrder() {
    if(this.orderedProducts.length) {
      this.basket.updateUserBasket();
      this.basket.buy_basket();
      this.getOrder();
    }
  }

  clearOrder() {
    if(this.orderedProducts.length) {
      this.basket.clear_basket();
      this.getOrder();
    }
  }

  async getOrder() {
    this.getUser();
    this.orderedProducts = await this.basket.get_from_basket();
    this.basketComponent.getOrder();
  }
}
