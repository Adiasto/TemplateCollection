import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.scss']
})
export class Map1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initMaps();
  }

  initMaps(){
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAxYDoKS-oevZ1r52VdNG5guFM055hW0iM&callback=initMap';
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    // Attach your callback function to the `window` object
    window["initMap"] = function () {
      console.log("loaded map")
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
      
      // JS API is loaded and available
    };

  }
 
}
