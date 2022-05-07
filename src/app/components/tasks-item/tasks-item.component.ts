import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/tasks';
import { TASKS } from '../../mock-app';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input()task:Task=TASKS[0];
  @Output() borrarTarea:EventEmitter<Task>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  modificarTarea(){
    console.log("Click en Modificar Tarea " + this.task.text + "This es " + this + " Task es " + this.task);
  }
  borrar(){
    this.borrarTarea.emit(this.task)
    console.log("Emitiendo Borrar tarea " + this.task.text);
  }

}
