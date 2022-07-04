import { Component, OnInit,ElementRef} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  isShown: boolean;
  constructor(private ele:ElementRef) { 
    this.isShown = true;
  }

  ngOnInit(): void {
  }
  hide()
  {
    this.isShown=!this.isShown;
  }
 
}
