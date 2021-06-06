import { Component, Inject, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { TodoServiceInterfaceToken } from 'src/app/shared/injection.token';
import { TodoServiceInterface } from 'src/app/shared/service/todo.service.interface';
import { Todo } from 'src/app/shared/model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList$: Observable<Todo[]>;

  constructor(
    @Inject(TodoServiceInterfaceToken) private todoService: TodoServiceInterface
  ) {
    this.todoList$ = this.todoService.myTodoList$();
  }

  ngOnInit(): void { }

}
