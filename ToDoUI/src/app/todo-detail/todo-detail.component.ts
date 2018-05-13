import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
 
  todo: any;
  
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private location: Location) { }

  ngOnInit() {
    this.getToDoDetail(this.route.snapshot.params['id']);
  }

  getToDoDetail(id) {
    this.http.get('/todos/'+id).subscribe(data => {
      this.todo = data;
    });
  }

  deleteToDo(id) {
    this.http.delete('/todos/'+id)
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