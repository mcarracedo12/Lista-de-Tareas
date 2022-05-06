import { Component, OnInit } from '@angular/core';
// import { Task } from 'src/app/tasks';  A estos dos los lleve al taskService que despues importo
// import { TASKS } from 'src/app/mock-app';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/tasks';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private TaskService: TaskService) { }

  ngOnInit(): void {
    //Like promisse
    this.TaskService.getTasks().subscribe(tasks=>[
      this.tasks = tasks
    ]);
  }

}
