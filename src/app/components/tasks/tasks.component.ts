import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/tasks';
import { TASKS } from '../../mock-app';


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
    this.TaskService.getTasks().subscribe(tasks => [
      this.tasks = tasks
    ]);
  }

  borrarTarea(task: Task) {
    console.log("Borrando tarea " + task.text + " con id " + task.id);
    this.TaskService.deleteTask(task).subscribe(() => [
      this.tasks = this.tasks.filter(t => t.id != task.id)
    ])
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    console.log(task);
    this.TaskService.updateTaskReminder(task).subscribe();
  }

  // addTask(task: Task) {
  //   // let tasks=this.tasks.push(task);
  //   this.TaskService.addTask(task).subscribe
  //   (
  //     (task)=>{
  //       this.tasks.push(task);
  //     }
  // )
  // }

}
