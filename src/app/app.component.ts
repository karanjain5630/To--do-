import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  StoredTask=[];
  AddedTask(task)
  {
    console.log(task);
    this.StoredTask.push(task);
  }
}
