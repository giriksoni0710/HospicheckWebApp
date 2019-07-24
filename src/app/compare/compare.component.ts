import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

query1: String;
query2: String;
maindata: any;


  constructor(public router: Router, public route: ActivatedRoute, public http: HttpClient) {

    this.query1= '';

    this.query2= '';
    this.maindata='';

   }

  ngOnInit() {

    let query1 = this.route.snapshot.queryParamMap.get('hosp1');

    let query2 = this.route.snapshot.queryParamMap.get('hosp2');


    // console.log(query1);
    // console.log(query2);
 
    this.http.post("http://localhost:3000/searchQuery2", {searchcity1: query1.toString(), searchcity2: query2.toString()}).toPromise().then(data=>{

      this.maindata = data;
    if(this.maindata)
    {
    console.log(this.maindata);
    }else{
      console.log('no data');
    }
    })
    


  }

}
