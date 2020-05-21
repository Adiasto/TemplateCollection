import { Component, OnInit } from '@angular/core';
import WOW from 'wow.js'

@Component({
  selector: 'app-bg-info1',
  templateUrl: './bg-info1.component.html',
  styleUrls: ['./bg-info1.component.scss']
})
export class BgInfo1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    new WOW().init();
  }

}
