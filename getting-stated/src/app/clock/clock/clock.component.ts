import { Component, OnInit, Input } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  nowTime: Date = new Date();
  @Input() format: string;

  constructor() { 
    setInterval(() => { this.refreshTime() }, 1000);
  }

  refreshTime() {
    this.nowTime = new Date();
  }

  ngOnInit() {
    //this.refreshTime();

    //setInterval(() => { this.refreshTime() }, 1000);
  }

}
