import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from './todo/todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detail/:id', component: TodoDetailComponent },  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
