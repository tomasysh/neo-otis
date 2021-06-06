
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable} from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { AuthInterfaceToken } from './../injection.token';
import { AuthInterface } from './auth.interface';
import { TodoServiceInterface } from './todo.service.interface';
import { Todo } from '../model/todo.model';
import { User } from './../model/user.model';

@Injectable()

export class TodoService implements TodoServiceInterface {

  constructor(
    @Inject(AuthInterfaceToken) private authService: AuthInterface,
    private http: HttpClient,
  ) {}

  // getTodoDetail(todoId: number): Observable<Todo> {
  //   return this.http.get<Todo>(`api/todos/${todoId}`);
  // }

  // getTodoList(userId: number): Observable<Todo[]> {
  //   return this.http.get<Todo[]>(`api/todos?assignee=${userId}`);
  // }

  todoList$(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`api/todos?assignee=${userId}`);
  }

  myTodoList$(): Observable<Todo[]> {
    const loginUser$: Observable<User> = this.authService.loginUser$();
    return loginUser$.pipe(mergeMap((loginUser) => this.http.get<Todo[]>(`api/todos?assignee=${loginUser.id}`)));
  }

}
