import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskCategory } from '../task-category-details/task-category-details.component';

@Component({
  selector: 'task-category',
  templateUrl: './task-category.component.html',
  styleUrls: ['./task-category.component.less'],
})
export class TaskCategoryComponent {
  taskEnum = TaskCategory;
  clickedTask = "";
  tasks: Array<any> = [
    { id: TaskCategory.alltasks, value: 'All Tasks' },
    { id: TaskCategory.completed, value: 'Completed' },
    { id: TaskCategory.starred, value: 'Starred' },
    { id: TaskCategory.deleted, value: 'Deleted' },
  ];
  constructor(private router: Router) {}

  fetchValues(clickedId: string): void {
    this.clickedTask = clickedId;
    this.router.navigate(['/', clickedId]);
  }
}
