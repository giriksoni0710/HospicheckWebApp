import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-hospital-view',
  templateUrl: './single-hospital-view.component.html',
  styleUrls: ['./single-hospital-view.component.scss']
})
export class SingleHospitalViewComponent implements OnInit {

  constructor() { }

  // hospName:any,hospAddr:any,phone:any,website:any,department:any
  ngOnInit() {
    
    // let query1 = this.route.snapshot.queryParamMap.get('hospName');
    // let query2 = this.route.snapshot.queryParamMap.get('hospAddr');
  }

}
