import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-item';
import { ITEMS } from '../mock-todo-items';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  // свойство состояния компонента
  toDoItem: ToDoItem = {
    id: 1,
    name: 'Call Joe',
    isComplete: false
  };
  // свойство состояния компонента: демо-список моделей задачек
  items = ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
