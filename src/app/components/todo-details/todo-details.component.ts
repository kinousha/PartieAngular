import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  currentTodo: Todo = {
    label: '',
    description: '',
    etat: 0
  };
  message = '';

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
  }

  getTodo(id: string): void {
    this.todoService.get(id)
      .subscribe(
        data => {
          this.currentTodo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

 

  updateTodo(): void {
    this.message = '';

    this.todoService.update(this.currentTodo.id, this.currentTodo)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This todo was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
  addTodo(): void {
    this.message = '';

    this.todoService.update(this.currentTodo.id, this.currentTodo)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This todo was added successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTodo(): void {
    this.todoService.delete(this.currentTodo.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/todos']);
        },
        error => {
          console.log(error);
        });
  }
}
