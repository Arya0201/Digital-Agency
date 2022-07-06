import { Component, OnInit,ElementRef} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  data = {
    nav: "News",
    title:"Lorem Ipsum is simply dummy text of the printing and.",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  };
  newscard1=[
    {img:"../../assets/news/g1.png",name:"John smash",time:".5min",heading:"Lorem Ipsum is simply dummy text dummy text",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {img:"../../assets/news/g3.png",name:"John smash",time:".5min",heading:"Lorem Ipsum is simply dummy text dummy text",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
  ]
  newscard2=[
    {img:"../../assets/news/g2.png",name:"Johm smash",time:".5min",title:"Lorem lpsum is simple dummy text dummy text?"},
    {img:"../../assets/news/g4.png",name:"Johm smash",time:".5min",title:"Lorem lpsum is simple dummy text dummy text?"},
    {img:"../../assets/news/g5.png",name:"Johm smash",time:".5min",title:"Lorem lpsum is simple dummy text dummy text?"},
    {img:"../../assets/news/g6.png",name:"Johm smash",time:".5min",title:"Lorem lpsum is simple dummy text dummy text?"},
    {img:"../../assets/news/g7.png",name:"Johm smash",time:".5min",title:"Lorem lpsum is simple dummy text dummy text?"},
    {img:"../../assets/news/g8.png",name:"Johm smash",time:".5min",title:"Lorem lpsum is simple dummy text dummy text?"},
    {img:"../../assets/news/g9.png",name:"Johm smash",time:".5min",title:"Lorem lpsum is simple dummy text dummy text?"}
  ]
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
