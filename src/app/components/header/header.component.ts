import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/tasks';
import { TaskService } from 'src/app/service/task.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'My Task List';
  tasks: Task[] = [];
  constructor(private TaskService: TaskService) { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("Toggle pressed!!");
  }

  addTask(task: Task) {
    // let tasks=this.tasks.push(task);
    this.TaskService.addTask(task).subscribe
    (
      (task)=>{
        this.tasks.push(task);
      }
  )
  }

}
