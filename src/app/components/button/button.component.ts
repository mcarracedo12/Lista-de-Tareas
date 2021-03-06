import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../tasks';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color: string=""; // Estan en Header.Html, donde se llama al selector app-button
  @Input() text:string="";
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
    // console.log("Click en Boton de Agregar");
  }

}
