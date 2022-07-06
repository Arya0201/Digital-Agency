import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
 
export class ServicesComponent implements OnInit {
   data = {
    nav: "Service",
    title:"Lorem Ipsum is simply dummy text of the printing and.",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  };
   
  info1={logo:"../../assets/services/l1.png",
         num:"90+",
         name:"Clients"};
  info2={logo:"../../assets/services/l2.png",
         num:"30+",
         name:"Countries"};
  info3={logo:"../../assets/services/l3.png",
         num:"50+",
         name:"Projects"};

  Desc1={title:"Lorem Ipsum is simply dummy text dummy text ",desc1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",desc2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."};       
  
  constructor() { }

  ngOnInit(): void {
  }

}
