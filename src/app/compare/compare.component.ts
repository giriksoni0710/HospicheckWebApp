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
hospCheck: String;
maindata: any;


  constructor(public router: Router, public route: ActivatedRoute, public http: HttpClient) {

    this.query1= '';

    this.query2= '';
this.hospCheck = '';
    this.maindata='';

   }

  ngOnInit() {

    let query1 = this.route.snapshot.queryParamMap.get('hosp1');

    let query2 = this.route.snapshot.queryParamMap.get('hosp2');

    let hospCheck = this.route.snapshot.queryParamMap.get('hospCheck1');
    console.log(hospCheck);
 
    this.http.post("http://localhost:3000/searchQuery2", {searchcity1: query1.toString(), searchcity2: query2.toString(), hospCheck: hospCheck.toString()}).toPromise().then(data=>{

      this.maindata = data;
    if(this.maindata)
    {
    console.log(this.maindata);
    
    console.log(query1);
    console.log(hospCheck);
    }else{
      console.log('no data');
    }
    })
    


  }

}
