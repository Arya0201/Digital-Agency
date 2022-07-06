import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   devCard1=[
    {img:"../../assets/home/mobile.png",name:"Mobile Game Development"},
    {img:"../../assets/home/pc.png",name:"PC Game Development"},
    {img:"../../assets/home/ps4.png",name:"ps4 Game Development"},
    {img:"../../assets/home/ar.png",name:"AR/VR Solutions"}
   ]
   devCard2=[
    {img:"../../assets/home/ar2.png",name:"AR/ VR design"},
    {img:"../../assets/home/3d.png",name:"3D Modelings"},
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
