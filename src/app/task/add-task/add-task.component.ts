import { Component, OnInit,Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  textvalue:String="";
  enteredtitle:String="";
  @Output() TaskCreated=new EventEmitter();
  constructor() { }
  onAddTask(){
  console.log("hello");
  const task={title:this.textvalue};
  this.TaskCreated.emit(task);
  console.log("event emitted");
  }
  ngOnInit() {
  }

}
