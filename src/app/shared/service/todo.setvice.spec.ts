import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthInterfaceToken, TodoServiceInterfaceToken } from 'src/app/shared/injection.token';
import { TodoServiceInterface } from 'src/app/shared/service/todo.service.interface';
import { AuthService } from 'src/app/shared/service/auth.service';
import { TodoService } from 'src/app/shared/service/todo.service';
import { Todo, TodoStatus } from 'src/app/shared/model/todo.model';

describe('TodoService', () => {
  let todoService: TodoServiceInterface;
  let mockHttpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: AuthInterfaceToken, useClass: AuthService },
        { provide: TodoServiceInterfaceToken, useClass: TodoService }
      ]
    });
    todoService = TestBed.inject(TodoServiceInterfaceToken);
    mockHttpClient = TestBed.inject(HttpTestingController);
  });

  it('should be created', ()=> {
    expect(TodoService).toBeTruthy();
  });

  it('should list todos of login user', ()=> {
    /** act */
    const expected: Todo[] = [
      {
        id: 1,
        plan: 'plan1',
        summary: 'create new Angualr project',
        status: TodoStatus.OPEN,
        tag: ['main'],
        assignee: [80251]
      }
    ];

    todoService.todoList$(80251).subscribe((todos) => {
      /** assert */
      expect(todos).toEqual(expected);
    });

    /** arrange */
    const mockResponse: Todo[] = [
      {
        id: 1,
        plan: 'plan1',
        summary: 'create new Angualr project',
        status: TodoStatus.OPEN,
        tag: ['main'],
        assignee: [80251]
      }
    ];

    mockHttpClient.expectOne({
      url: `api/todos?assignee=80251`,
      method: 'GET'
    }).flush(mockResponse);
  });

});
