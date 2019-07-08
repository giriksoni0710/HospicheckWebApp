import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // typescript way

  constructor() { }


 apptitle: String = 'HospiCheck';

 // Javascript way
//  apptitle="Definite";
 status: boolean = false;


  ngOnInit() {








  }
  clickEvent() {

   this.status = !this.status;

  }


}
