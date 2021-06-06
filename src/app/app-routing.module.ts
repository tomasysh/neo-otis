import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'todo-list', loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule) },
  {
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
