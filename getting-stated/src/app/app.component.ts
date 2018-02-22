import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app 111';

  num1: string;
  num2: string;
  result: number;


  saySomthing() {
    console.log('*********aaaaaaaaaaaa********');
  }

  calc() {
    this.result = parseInt(this.num1, 10) + parseInt(this.num2, 10);
  }

}


