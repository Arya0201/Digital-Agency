import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

     data:any=[{title:"Lorem Ipsum",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
     {title:"Lorem Ipsum",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
     {title:"Lorem Ipsum",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
      ]
     
      team=[
        {img:"../../assets/about/Bill 1.png",name:"John peter"},
        {img:"../../assets/about/t2.png",name:"John peter"},
        {img:"../../assets/about/t3.png",name:"John peter"},
        {img:"../../assets/about/t4.png",name:"John peter"},
      ]
  constructor() { }
  ngOnInit(): void {
  }

}
