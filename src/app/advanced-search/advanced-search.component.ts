import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';


@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  query1: String;
  query2: String;
  url:any;
  url2:any;
  displaydata: any;
  maindata: any;
  abc: any;
  xyz: any;
  arr: any;
  hospital: any;
  walkin: any;
  vancouver: any;
  burnaby: any;
  surrey: any;
  langley: any;
  richmond : any;
  cardiology: any;
  neurology: any;
  general: any;
  dermatology: any
  dental:any;


  hospital_name: String;
  hospital_address: String;
  hospital_city: String;
  hospital_phone: Number;
  website_link: String;
  count:any =0;




showhide = false;
comparepressed= false;

  filtertoggle() {

    this.showhide = !this.showhide;


  }


  constructor(public dataService: DataService,public router: Router, public route: ActivatedRoute, public http: HttpClient) {

    // console.log(this.query2);
    this.query1 = '';
    this.query2 = '';
    this.url = "http://localhost:3000/searchQuery";
    this.url2 = "http://localhost:3000/searchQueryFilter";
    this.maindata;

    this.hospital_name = '';
    this.hospital_address = '';

    this.hospital_city = '';

    this.hospital_phone;

    this.website_link = '';
    this.arr = [];
    // this.hospital = '';

   }

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

    //*******we could also pass the appended hospName as the div id*************//
    //****then every div will have the hospname as id and it will be easier to process further***//

    // ,walkin: String,vancouver: String,burnaby: String,surrey: String,langley: String,cardiology: String,neurology: String,general: String,dermatology: String,dental
    updateSearch(hospital: any, walkin: any,vancouver: any,burnaby: any,surrey: any,langley: any,cardiology: any,neurology: any,general: any,dermatology: any,dental:any)
    // updateSearch()
    { 
      let obj1 =
      {
        hospital : hospital.checked,
        walkin : walkin.checked,
        vancouver : vancouver.checked,
        burnaby : burnaby.checked,
        surrey : surrey.checked,
        langley : langley.checked,
        // richmond : richmond.checked,
        cardiology : cardiology.checked,
        neurology : neurology.checked,
        general : general.checked,
        dermatology : dermatology.checked,
        dental : dental.checked,
        hospital1 : hospital.value,
        walkin1 : walkin.value,
        vancouver1 : vancouver.value,
        burnaby1 : burnaby.value,
        surrey1 : surrey.value,
        langley1 : langley.value,
        // richmond1 : richmond.value,
        cardiology1 : cardiology.value,
        neurology1 : neurology.value,
        general1 : general.value,
        dermatology1 : dermatology.value,
        dental1 : dental.value
      }
      this.http.post(this.url2,obj1).toPromise();
    }

    addtocompare(cmp: String){
      
      this.comparepressed= true;
      
      if(this.count==0){
      this.abc= cmp;
      // console.log(this.abc);
      this.count++;
      }
      else if(this.count==1){
      this.xyz = cmp; 
      this.count = 0;
      }
      else{
        return false;
      }
      // this.count++;
    }

    
    compareData(){

      this.router.navigate(['/compare'], {queryParams: {hosp1: this.abc.textContent, hosp2:this.xyz.textContent}});
      

      }

    }

