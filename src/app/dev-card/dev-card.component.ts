import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.css']
})
export class DevCardComponent implements OnInit {
   @Input() item:any;
  constructor() { }

  ngOnInit(): void {
  }

}
