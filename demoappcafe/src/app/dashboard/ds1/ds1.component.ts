import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ds1',
  templateUrl: './ds1.component.html',
  styleUrls: ['./ds1.component.css']
})
export class Ds1Component implements OnInit {

  constructor() {
    console.log("ds1");
   }

  ngOnInit(): void {
    console.log("on ds1");

  }

}
