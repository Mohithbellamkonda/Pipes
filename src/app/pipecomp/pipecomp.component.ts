import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipecomp',
  templateUrl: './pipecomp.component.html',
  styleUrls: ['./pipecomp.component.css']
})
export class PipecompComponent implements OnInit {

  dateToday!: string;
  name!: string;
  mynumber:number=0.54234;

  constructor() { }

  ngOnInit(): void {
    this.dateToday=new Date().toDateString();
    this.name="Mohith"
  }

}
