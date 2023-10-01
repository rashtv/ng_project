import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  receivedData: string = "";

  @Input() search: () => void = () => {};

  receiveDataFromChild(data: string) {
    this.receivedData = data;
    this.handle();
  }

  @Output() dataEvent = new EventEmitter<string>();
  handle() {
    this.dataEvent.emit(this.receivedData);
  }
}
