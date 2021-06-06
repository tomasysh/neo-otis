import { TodoServiceInterface } from './../shared/service/todo.service.interface';
import { TodoServiceInterfaceToken } from './../shared/injection.token';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { TodoService } from './../shared/service/todo.service';

@Injectable()
export class TodoListService {

  constructor(
    private http: HttpClient,
    @Inject(TodoServiceInterfaceToken) private todoService: TodoServiceInterface
  ) { }

}
