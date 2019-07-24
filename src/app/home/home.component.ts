import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit 
{

  get data():any {

    return this.dataService.serviceData;
}
set data(value: any) {
    this.dataService.serviceData = value;
}

  maindata: any;

  query1: String;
  query2: String;
  url:any;
  postData: any;
  hospNames: any;
  // myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];

  abc(){

    return "hello" ;
  }


  constructor(private http: HttpClient, public router: Router, public dataService: DataService)
  {

    this.query1 = '';
    this.query2 = '';
    this.url = "http://localhost:3000/searchQuery";
  }

  // @Output() messageEvent = new EventEmitter<any>();




    post() {

      if(this.query2=="" || this.query2=="null")
      {
        console.log("City is empty");
        return false;
      }

      // console.log('post',this.message);
       this.http.post(this.url,{searchinput:this.query1,searchcity:this.query2}).toPromise().then(data =>
        {

          this.maindata = data;


          // this.data(this.maindata);


          // this.sendData();
          this.router.navigate(['/advanced-search'], {queryParams: {searchinput: this.query1,searchcity:this.query2}});
          // console.log(this.data);


        });

          }
          // sendData() {

          //   this.messageEvent.emit(this.maindata);

          // }


    async ngOnInit(){
      this.hospNames = await this.http.get('http://localhost:3000/searchQuery').toPromise().then(data=>{
        console.log(data);

      });

    }
  }



