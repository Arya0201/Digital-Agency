import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-headerinfo',
  templateUrl: './headerinfo.component.html',
  styleUrls: ['./headerinfo.component.css']
})
export class HeaderinfoComponent implements OnInit {
  @Input() item:any;
  constructor() { }

  ngOnInit(): void {
  }

}
