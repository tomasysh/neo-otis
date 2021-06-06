import { Observable } from 'rxjs';

import { Todo } from './../model/todo.model';

export interface TodoServiceInterface {
  todoList$(userId: number): Observable<Todo[]>;
  myTodoList$(): Observable<Todo[]>;
}
