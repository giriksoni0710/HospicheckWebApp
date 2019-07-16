import { Component, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {



showhide = false;


  filtertoggle() {

    this.showhide = !this.showhide;

  }


  constructor() {



   }

  //  ngAfterViewInit () {


  // }




  ngOnInit() {



    if (window.matchMedia('(min-width: 810px)').matches) {

    this.showhide = true;

      }

  }


// (window:resize) in frontend


    // onResized(event: ResizedEvent) {

    //   if (window.matchMedia(('min-width: 810px'))) {

    //     this.boolean = true;

    //   }

    // }



}
