import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component'
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MessageComponent,
    TodoDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
