import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/tasks';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'My Task List';
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("Toggle pressed!!");
  }

  addTask(task:Task){
    console.log(task);
  }

}
