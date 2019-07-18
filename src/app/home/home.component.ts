import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent
{


  maindata: any;

  query1: String;
  query2: String;
  url:any;
  postData: any;

  abc(){

    return "hello" ;
  }


  constructor(private http: HttpClient, public router: Router)
  {

    this.query1 = '';
    this.query2 = '';
    this.url = "http://localhost:3000/searchQuery";
  }

  @Output() messageEvent = new EventEmitter<any>();




    post() {
      // console.log('post',this.message);
       this.http.post(this.url,{searchinput:this.query1,searchcity:this.query2}).toPromise().then(data =>
        {

          this.maindata = data;

          this.sendData();


          this.router.navigate(['/advanced-search']);
          console.log(this.maindata);


        });

          }


          sendData() {

            this.messageEvent.emit(this.maindata);

          }









}
