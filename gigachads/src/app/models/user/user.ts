import { Drink } from "../drink/drink";

export class User {
    'login': string;
    'password': string;
    'basket': Drink[];
    'balance': number;

    constructor(login: string, password: string, balance: number = 30000) {
        this.login = login;
        this.password = password;
        this.basket = [];
        this.balance = balance;
    }
}
