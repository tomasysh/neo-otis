import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { User } from './../model/user.model';
import { AuthInterfaceToken } from './../injection.token';
import { AuthInterface } from './auth.interface';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthInterface;
  let mockHttpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: AuthInterfaceToken, useClass: AuthService }
      ]
    });
    authService = TestBed.get(AuthInterfaceToken, AuthService);
    mockHttpClient = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(AuthService).toBeTruthy();
  });

  it('should return login user', () => {
    const expected: User = {
      id: 80251,
      name: 'Tomas'
    };

    authService.loginUser$().subscribe((user) => {
      /** assert */
      expect(user).toEqual(expected);
    })
  });
});
