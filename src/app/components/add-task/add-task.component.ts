import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output()onAddTask:EventEmitter<Task>= new EventEmitter();
  text: string = "";
  dia: string = "";
  reminder: boolean = false;

  constructor() { }


  ngOnInit(): void {

  }

  closeModal() {
    console.log("closeModal() pressed");
  }

  onEnviar() {
    if (!this.text) {
      alert("Agregar tarea!");
    };
    const { text, dia, reminder } = this;
    const newTask = { text, dia, reminder }
    // OTRA FORMA ES ESTA:
    // const newTask={
    //   text:this.text,
    //   dia:this.dia,
    //   reminder: this.reminder
    // }
    console.log("pressed");
    this.onAddTask.emit(newTask);
  }

  //EMITIMOS EVENTO PARA CREAR TAREA



}
