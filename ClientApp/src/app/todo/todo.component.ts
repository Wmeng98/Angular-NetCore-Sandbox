import { Component, OnInit } from '@angular/core';
import { toDoItem } from '../toDoItem';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {
  todoList: toDoItem[];


  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getList();
  }
  getList(): void {
    this.todoService.getItems().subscribe(list => this.todoList = list);
  }

  add(itemShort: string, itemLong: string): void {
    itemShort = itemShort.trim();
    itemLong = itemLong.trim();
    if (!itemShort && !itemLong) { return; }

    this.todoService.addItem({shortDescription: itemShort, longDesription: itemLong} as toDoItem)
    .subscribe(item => {
      this.todoList.push(item);
    });
  }

}

