import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newscard1',
  templateUrl: './newscard1.component.html',
  styleUrls: ['./newscard1.component.css']
})
export class Newscard1Component implements OnInit {
  @Input() item:any;
  constructor() { }

  ngOnInit(): void {
  }

}
