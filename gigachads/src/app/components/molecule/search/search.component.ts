import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private api: ApiService, private r: Router) {}
  receivedData: string = "";
  
  search() {
    this.api.get_by_name(this.receivedData).subscribe();
    this.r.navigate(["/catalogue"]);
  }
  
  receiveDataFromChild(data: string) {
    this.receivedData = data;
  }
}
