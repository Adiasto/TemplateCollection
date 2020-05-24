import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events1',
  templateUrl: './events1.component.html',
  styleUrls: ['./events1.component.scss']
})
export class Events1Component implements OnInit {

  constructor() { }

  eventList = [
    {
      image: "../../../assets/images/events/engagement.jpg",
      color: "rgb(255, 243, 243)",
      textColor: {
        primary: "rgb(44, 0, 24)",
        secondary: "rgb(235, 0, 125)",
        ternary: ""
      },
      name: "Engagement"
    },
    {
      image: "../../../assets/images/events/haldi.jpg",
      color: "rgb(255, 254, 243)",
      name: "Haldi"
    },
    {
      image: "../../../assets/images/events/dance.jpg",
      color: "rgb(243, 245, 255)",
      name: "Dance"
    },
    {
      image: "../../../assets/images/events/pooja.jpg",
      color: "rgb(248, 255, 243)",
      name: "Pooja"
    },
    {
      image: "../../../assets/images/events/reception.jpg",
      color: "rgb(243, 255, 254)",
      name: "Reception"
    }
  ];
  activeEvent = 0;
  ngOnInit() {

  }

  selectElement(index) {
    this.activeEvent = index;
  }

}
