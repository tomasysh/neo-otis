import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthInterfaceToken, TodoServiceInterfaceToken } from './shared/injection.token';
import { TodoService } from './shared/service/todo.service';
import { AuthService } from './shared/service/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: AuthInterfaceToken, useClass: AuthService },
    { provide: TodoServiceInterfaceToken, useClass: TodoService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
