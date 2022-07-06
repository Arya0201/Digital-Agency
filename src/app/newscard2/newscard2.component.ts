import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-newscard2',
  templateUrl: './newscard2.component.html',
  styleUrls: ['./newscard2.component.css']
})
export class Newscard2Component implements OnInit {
  @Input() item:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
