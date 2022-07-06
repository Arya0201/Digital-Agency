import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-s-card',
  templateUrl: './s-card.component.html',
  styleUrls: ['./s-card.component.css']
})
export class SCardComponent implements OnInit {
  @Input() item:any;
  constructor() { }

  ngOnInit(): void {
  }

}
