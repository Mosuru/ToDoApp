import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { Location } from '@angular/common';
const appRoutes: Routes = [
  {
    path: 'todo',
    component: TodoComponent,
    data: { title: 'ToDo List' }
  },
  {
    path: 'todo-detail/:id',
    component: TodoDetailComponent,
    data: { title: 'ToDo Details' }
  },
  {
    path: 'todo-create',
    component: TodoCreateComponent,
    data: { title: 'Create ToDo' }
  },
  {
    path: 'todo-edit/:id',
    component: TodoEditComponent,
    data: { title: 'Edit ToDo' }
  },
  { path: '',
    redirectTo: '/todo',
    pathMatch: 'full'
  }
];

@NgModule({ 
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDetailComponent,
    TodoCreateComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
	  FormsModule,
	  HttpClientModule,
	  RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
	)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
