import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  toDoList: { title: string, desc: string}[] = [{
    title: 'hw',
    desc: 'create ToDo list'
  }]

  constructor() { }

  ngOnInit(): void {
  }

  addToDo = (title: string, desc: string) => {
    this.toDoList.push({
      title: title,
      desc: desc
    })
  }

  removeToDo = (rmItem: {title: string, desc: string}) => {
    this.toDoList = this.toDoList.filter((e) => e !== rmItem);
  }

}
