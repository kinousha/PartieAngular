import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
  })
  export class AddTodoComponent implements OnInit {
    todo: Todo = {
        label: '',
        description: '',
        etat:0
        
       };
      submitted = false;
      constructor(private todoService: TodoService) { }

     ngOnInit(): void {
     }
     saveTodo(): void {
        const data = {
          title: this.todo.label,
          description: this.todo.description

        };
        this.todoService.create(data)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
          },
          error => {
            console.log(error);
          });
     }
     newTodo(): void {
      this.submitted = false;
      this.todo = {
        label: '',
        description: '',
        etat:0
      };
    }
  
  }