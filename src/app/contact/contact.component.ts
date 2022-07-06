import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data = {
    nav: "Contact us",
    title:"Lorem Ipsum is simply dummy text of the printing and.",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  };
  constructor() { }

  ngOnInit(): void {
  }

}
