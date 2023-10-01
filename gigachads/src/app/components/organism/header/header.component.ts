import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  authorized: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  auth() {
    this.authorized = !this.authorized
  }

  @Input() search: () => void = () => {};

  receivedData: string = "";

  receiveDataFromChild(data: string) {
    this.receivedData = data;
    this.handle();
  }

  @Output() dataEvent = new EventEmitter<string>();
  handle() {
    this.dataEvent.emit(this.receivedData);
  }
}
