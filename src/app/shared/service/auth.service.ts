import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { AuthInterface } from './auth.interface';
import { User } from "../model/user.model";

@Injectable()

export class AuthService implements AuthInterface {

  constructor(
    private http: HttpClient
  ) {}

  loginUser$(): Observable<User> {
    return this.http.get<User>(`api/currentUser`);
  }
}
