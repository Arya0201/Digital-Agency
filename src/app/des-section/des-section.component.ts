import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-des-section',
  templateUrl: './des-section.component.html',
  styleUrls: ['./des-section.component.css']
})
export class DesSectionComponent implements OnInit {
   @Input() item:any;
  constructor() { }

  ngOnInit(): void {
  }

}
