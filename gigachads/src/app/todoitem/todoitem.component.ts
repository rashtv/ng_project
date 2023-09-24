import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.scss']
})
export class TodoitemComponent implements OnInit {

  @Input() todoItem: {title: string, desc: string} = {title: "", desc: ""};
  @Input() removeItem: (rmTitle: {title: string, desc: string}) => void = (rmTitle: {title: string, desc: string}) => {};


  constructor() {}

  ngOnInit(): void {
  }

  rmItem() {
    this.removeItem(this.todoItem);
  }

}
