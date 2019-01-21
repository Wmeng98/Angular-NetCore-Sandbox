import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { toDoItem } from '../toDoItem';
import { TodoService } from '../todo.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  item: toDoItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.getItem();
    this.route.url.subscribe(url =>{
      console.log(url);
      this.getItem();
    });
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("id >>> " + id);
    this.todoService.getItem(id).subscribe(item => this.item = item);
    // recall, subscribe is asynchronous...
  }

  deleteItem(item: toDoItem): void {
    this.todoService.deleteItem(item).subscribe(_ => this.router.navigate(['todo']));
  }

  save(item: toDoItem): void {
    this.todoService.saveItem(item).subscribe(i => {
      this.item = i;
      this.router.navigate(['todo']);
    });
  }


}


// Routable HeroDetailComponent
// Previously, the parent HeroesComponent set the HeroDetailComponent.hero property and the HeroDetailComponent displayed the hero.

// HeroesComponent doesn't do that anymore. Now the router creates the HeroDetailComponent in response to a URL such as ~/detail/11.

// The HeroDetailComponent needs a new way to obtain the hero-to-display.

// Get the route that created it,
// Extract the id from the route
// Acquire the hero with that id from the server via the HeroService