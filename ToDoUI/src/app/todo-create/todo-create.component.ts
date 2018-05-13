import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { Todo } from '../todo';
 
@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
    
  todo =new Todo();
  
  constructor(private http: HttpClient, private router: Router, private location: Location) { }

  ngOnInit() {
    
  }

  saveToDo(todo :Todo) {
   
    console.log(JSON.stringify(todo.taskDetails));
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    this.http.post('/todos', JSON.stringify(todo), {headers: httpHeaders})
      .subscribe(res => {
          this.router.navigate(['/todo']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  cancel() {
    this.location.back();
  }
}