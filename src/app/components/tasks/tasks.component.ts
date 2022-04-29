import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/tasks';
import { TASKS } from 'src/app/mock-app';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  Tasks: Task[]=TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
