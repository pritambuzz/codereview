import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-category-details',
  templateUrl: './task-category-details.component.html',
  styleUrls: ['./task-category-details.component.less'],
})
export class TaskCategoryDetailsComponent {
  taskCategory: string = TaskCategory.alltasks;
  filteredTask: Array<any> = [];
  taskCategoryArray: Array<any> = [];
  searchForm: FormGroup = this.fb.group({
    searchTasks: [''],
  });
  constructor(
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
    private fb: FormBuilder
  ) {
    this.taskCategory = activatedRoute.snapshot.url[0].path;
  }
  ngOnInit(): void {
    this.taskCategoryArray = this.taskService.getJSON().data.tasks;
    this.taskCategoryArray = this.filterTaskCategory();
    this.filteredTask = [...this.taskCategoryArray];
    this.searchForm.get('searchTasks')?.valueChanges.subscribe((result) => {
      if (result) {
        result = result.toLocaleLowerCase();
        this.taskCategoryArray = this.filteredTask.filter((task: any) => {
            return task.title.toLocaleLowerCase().includes(result);
          });
      } else {
        this.taskCategoryArray = [...this.filteredTask];
      }
    });
  }

  filterTaskCategory(): Array<any> {
    switch (this.taskCategory) {
      case TaskCategory.completed:
        return this.taskCategoryArray.filter((task) => task.completed === true);
      case TaskCategory.deleted:
        return this.taskCategoryArray.filter((task) => task.deleted === true);
      case TaskCategory.starred:
        return this.taskCategoryArray.filter((task) => task.starred === true);
      default:
        return this.taskCategoryArray;
    }
  }
}

export enum TaskCategory {
  alltasks = 'alltasks',
  completed = 'completed',
  deleted = 'deleted',
  starred = 'starred',
}
