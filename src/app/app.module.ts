import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskCategoryComponent } from './task-category/task-category.component';
import { TaskCategoryDetailsComponent } from './task-category-details/task-category-details.component';
import { RouterModule } from '@angular/router';
import { FormatdatePipe } from './formatdate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskCategoryComponent,
    TaskCategoryDetailsComponent,
    FormatdatePipe
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
