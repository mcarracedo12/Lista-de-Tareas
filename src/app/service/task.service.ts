import { Injectable } from '@angular/core';
import { Task } from 'src/app/tasks';
// import { TASKS } from 'src/app/mock-app';
import { Observable, of } from 'rxjs';
import{HttpHandler, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl='http://localhost:3004/list';
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
}
