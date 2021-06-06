import { InjectionToken } from "@angular/core";

import { AuthInterface } from "./service/auth.interface";
import { TodoServiceInterface } from './service/todo.service.interface';

export const AuthInterfaceToken = new InjectionToken<AuthInterface>('');
export const TodoServiceInterfaceToken = new InjectionToken<TodoServiceInterface>('');
