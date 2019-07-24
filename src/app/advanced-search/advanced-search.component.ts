import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
=======
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
>>>>>>> 832ddb1adcb9b7959b1420e83f92926300ed604c


@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  query1: String;
  query2: String;
  url:any;
  displaydata: any;
  maindata: any;

  hospital_name: String;
  hospital_address: String;
  hospital_city: String;
  hospital_phone: Number;
  website_link: String;




showhide = false;


  filtertoggle() {

    this.showhide = !this.showhide;


  }


  constructor(public dataService: DataService, public route: ActivatedRoute, public http: HttpClient) {

    // console.log(this.query2);
    this.query1 = '';
    this.query2 = '';
    this.url = "http://localhost:3000/searchQuery";
    this.maindata;

    this.hospital_name = '';
    this.hospital_address = '';

    this.hospital_city = '';

    this.hospital_phone;

    this.website_link = '';

   }

  //  ngAfterViewInit () {


  // }


  ngOnInit() {

    if (window.matchMedia('(min-width: 810px)').matches) {

      this.showhide = true;

     }
      let query1 = this.route.snapshot.queryParamMap.get('searchinput');

      let query2 = this.route.snapshot.queryParamMap.get('searchcity');

           this.http.post(this.url,{searchinput:query1,searchcity:query2}).toPromise().then(data =>
                {

                  this.maindata = data;

              });



    }

<<<<<<< HEAD
=======
    //*******we could also pass the appended hospName as the div id*************//
    //****then every div will have the hospname as id and it will be easier to process further***//


    addtocompare(cmp: any){

    alert(cmp.textContent);
      

    }

>>>>>>> 832ddb1adcb9b7959b1420e83f92926300ed604c
    }








// (window:resize) in frontend


    // onResized(event: ResizedEvent) {

    //   if (window.matchMedia(('min-width: 810px'))) {

    //     this.boolean = true;

    //   }

    // }




