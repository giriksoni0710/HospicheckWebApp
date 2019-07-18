import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { HomeComponent } from '../home/home.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements AfterViewInit {






data: object;


showhide = false;


  filtertoggle() {

    this.showhide = !this.showhide;


  }


  constructor(private http: HttpClient) {

    // console.log(this.query2);


   }

  //  ngAfterViewInit () {


  // }



  ngAfterViewInit() {



    if (window.matchMedia('(min-width: 810px)').matches) {

    this.showhide = true;

      }

  }


  receivemessage($event) {

    this.data = $event;

    console.log(this.data);
  }

// (window:resize) in frontend


    // onResized(event: ResizedEvent) {

    //   if (window.matchMedia(('min-width: 810px'))) {

    //     this.boolean = true;

    //   }

    // }



}
