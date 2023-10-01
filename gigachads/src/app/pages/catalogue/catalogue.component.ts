import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
  constructor(private apiService: ApiService) {}

  receivedData: string = "";

  receiveDataFromChild(data: string) {
    this.receivedData = data;
    console.log('cat');
  }

  ngOnInit() {
    this.search();
  }

  cards = [];

  search = () => {
    this.fetchData();
  }

  fetchData() {
    this.apiService.get_by_name(this.receivedData).subscribe(
      (response) => {
        this.cards = response.drinks;
        console.log(this.cards);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
