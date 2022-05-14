import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos?: Todo[];
  currentTodo?: Todo;
  currentIndex = -1;
  title = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.retrieveTodos();
  }

  retrieveTodos(): void {
    this.todoService.getAll()
      .subscribe(
        data => {
          this.todos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTodos();
    this.currentTodo = undefined;
    this.currentIndex = -1;
  }

  setActiveTodo(todo: Todo, index: number): void {
    this.currentTodo = todo;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentTodo = undefined;
    this.currentIndex = -1;

    this.todoService.findByTitle(this.title)
      .subscribe(
        data => {
          this.todos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
