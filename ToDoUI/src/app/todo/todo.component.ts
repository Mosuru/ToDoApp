import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos : any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('/todos').subscribe(data => {
      this.todos = data;
    });
  }

  selectedStatus: string = '';
  selectedPriority: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedStatus = event.target.value;
    this.http.get('/todos/status/'+this.selectedStatus).subscribe(data => {
      this.todos = data;
    });  
  }

  //event handler for the select element's change event
  changeHandler (event: any) {
    //update the ui
    this.selectedPriority = event.target.value;
    this.http.get('/todos/priority/'+this.selectedPriority).subscribe(data => {
      this.todos = data;
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

}