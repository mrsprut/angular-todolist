import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../to-do-item';
import { TodoItemsService } from '../../todo-items.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  constructor(private todoItemsService: TodoItemsService) {
    // this.items = todoItemsService.getItems();
    this.todoItemsService.getRemoteItems()
      .pipe(delay(3000))
      .subscribe(
        data => {
          console.log(data);
          this.items =
            data.map(
              todoItem => new ToDoItem(todoItem.id, todoItem.title, todoItem.completed)
            );
        },
        error => {
          console.log(error);
        });
  }

  selectedItem: ToDoItem;
  // свойство состояния компонента: демо-список моделей задачек
  items = [];
  onSelect(item: ToDoItem): void {
    this.selectedItem = item;
  }

  ngOnInit(): void {
  }

}
