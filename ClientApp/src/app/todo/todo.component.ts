import { Component, OnInit } from '@angular/core';
import { toDoItem } from '../toDoItem';
import { TodoService } from '../todo.service';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent implements OnInit {
  todoList: toDoItem[];


  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

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

  delete(item: toDoItem): void {
    this.todoList.filter(i => i !== item);
    this.todoService.deleteItem(item).subscribe(_ => this.getList());

    // code logic before navigation... 
    console.log("Navigating to: " + this.route + " after DELETION of todo item...");

    // this.route still reference up to todo since delete view not apart of child route
    this.router.navigate(['./'],{relativeTo:this.route});
  }
  // filter() method creates a new array with all 
  // elements that pass the test implemented by the provided function.


}

