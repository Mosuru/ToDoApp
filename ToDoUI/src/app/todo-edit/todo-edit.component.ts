import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todo: any;
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getToDo(this.route.snapshot.params['id']);
  }
 
  getToDo(id) {
    this.http.get('/todos/'+id).subscribe(data => {
      this.todo = data;
    });
  }

  updateToDo(id, data) {
    console.log(data);
    this.http.put('/todos/'+id, data)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/todo-detail', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  cancel() {
    this.location.back();
  }

}
