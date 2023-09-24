import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todocreate',
  templateUrl: './todocreate.component.html',
  styleUrls: ['./todocreate.component.scss']
})
export class TodocreateComponent implements OnInit {

  title = ""
  desc = ""

  @Input() addToDo: (title: string, desc: string) => void = (title: string, desc: string) => {};

  constructor() {  }

  ngOnInit(): void {
  }

  addNewToDo() {
    this.addToDo(this.title, this.desc);
    console.log(this.title)
    this.title = "";
    this.desc = "";
  }

}
