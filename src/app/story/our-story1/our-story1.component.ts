import { Component, OnInit, AfterViewInit } from '@angular/core';
import WOW from 'wow.js'
import simpleParallax from 'simple-parallax-js';


@Component({
  selector: 'app-our-story1',
  templateUrl: './our-story1.component.html',
  styleUrls: ['./our-story1.component.scss']
})
export class OurStory1Component implements OnInit, AfterViewInit {


  constructor() { }

  storyLines = [
    "It all started in the college days.",
    "What a lucky day when we both met first time.",
    "It was 2016, when Ranveer's studies was about to finish and Deepika's about to start.",
    "Mumbai such a romantic place to fall in love with someone.",
    "Like every other couple in india we kept it a secret from our parents for about 1 year.",
    "Our families accepted our proposal.",
    "Now after 5 years of the relationship we want to give it a different name.",
    "We want you to be there when we start the new phase of our love life."
  ];

  ngOnInit() {
    var heart=document.getElementById("moving-heart");
    var heart1=document.getElementById("heart-trail1");
    var heart2=document.getElementById("heart-trail2");
    var heart3=document.getElementById("heart-trail3");
    var heart4=document.getElementById("heart-trail4");

    document.getElementById('story').addEventListener("mousemove",(e)=>{
      heart.style.left = `${e.screenX-100}px` ;
      heart.style.top = `${e.screenY-200}px`;
      heart.style.filter = `hue-rotate(${e.screenX/2}deg)`;
    })
  }

  ngAfterViewInit(): void {
    var image = document.getElementById('story-image');
    // new simpleParallax(image,
    //   {
    //     orientation: 'right',
    //     scale:1.15
    //   });
      
    var context = this;
    new WOW({
      callback: function (box) {
        context.storyLines.forEach((line, index) => {
          document.getElementById('story-line-' + index).style.visibility = 'hidden';
          if (index > 0) {
            document.getElementById('story-line-' + index).style.animationDelay = index * 2 + 's';
          }
          setTimeout(() => {
            document.getElementById('story-line-' + index).style.visibility = 'visible';
          }, index * 1990);
        })
      },

    }).init();
    // this.brownianMotion(document.getElementById('moving1'),{x1:10,x2:1000,y1:0,y2:window.innerHeight})
  }

  focused() {
    console.log("focused")
  }

  // brownianMotion(element,coordinates){
  //   var distance,slope;

  //   slope=(coordinates.y2-coordinates.y1)/(coordinates.x2-coordinates.x1);
  //   distance=this.calculateDistance(coordinates.x1,coordinates.x2,coordinates.y1,coordinates.y2);
  //   setTimeout(() => {
  //     coordinates.x1=coordinates.x2;
  //     coordinates.y1=coordinates.y2;
  //     coordinates.x2=
  //     this.brownianMotion(elementy)
  //   }, distance*100);
  //   this.move(element,distance,x,y);
  // }

  move(element, distance, x, y) {
    element.style.transition = 'transform ' + distance / 10 + 's linear';
    element.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
  }

  calculateDistance(x1, x2, y1, y2) {
    return Math.sqrt((x1 - x2) ^ 2 + (y1 - y2) ^ 2);
  }
}
