import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { Drink } from 'src/app/models/drink/drink';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
  constructor(private apiService: ApiService) {}

  cards: Drink[] = [];
  ngOnInit() {
    this.dataObs()
  }

  dataObs() {
    this.apiService.sharedData.subscribe((array) => {
      this.cards = array;
    });
  }
}
