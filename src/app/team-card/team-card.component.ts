import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
    @Input() item:any;
  constructor() { }

  ngOnInit(): void {
  }

}
