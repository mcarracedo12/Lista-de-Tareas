import { Injectable } from '@angular/core';
import { Task } from 'src/app/tasks';
import { TASKS } from 'src/app/mock-app';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  constructor() { }

  getTasks(): Observable< Task[]>{
    const task = of(TASKS);
    return task;
  }
}
