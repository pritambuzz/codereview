import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskCategoryDetailsComponent } from './task-category-details/task-category-details.component';
import { TaskCategoryComponent } from './task-category/task-category.component';


const routes: Routes = [
  {
    path: 'alltasks',
    component: TaskCategoryDetailsComponent
  },
  {
    path: 'completed',
    component: TaskCategoryDetailsComponent
  },
  {
    path: 'starred',
    component: TaskCategoryDetailsComponent
  },
  {
    path: 'deleted',
    component: TaskCategoryDetailsComponent
  },
  {
    path: '',
    redirectTo: 'alltasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/