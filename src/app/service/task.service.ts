import { Injectable } from '@angular/core';
import { Task } from 'src/app/tasks';
// import { TASKS } from 'src/app/mock-app';
import { Observable, of } from 'rxjs';
import{HttpHandler, HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions={
  headers:new HttpHeaders({
   'content-type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl='http://localhost:3004/list';
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task:Task):Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task:Task):Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task, httpOptions);
  }


}
