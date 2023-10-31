import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  authorized: boolean = false;

  constructor(private r: Router) { }

  ngOnInit(): void {
  }

  auth() {
    this.authorized = true;
  }
  unauth() {
    this.authorized = false;
    this.r.navigate(['/catalogue']);
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
