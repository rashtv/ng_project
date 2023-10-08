import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private api: ApiService) {}
  receivedData: string = "";
  
  search() {
    this.api.get_by_name(this.receivedData).subscribe();
  }
  
  receiveDataFromChild(data: string) {
    this.receivedData = data;
  }
}
