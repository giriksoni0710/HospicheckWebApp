import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {


boolean = false;

  filtertoggle() {

    if (window.matchMedia('(min-width: 810px)')) {
      this.boolean = true;
    }

    this.boolean = !this.boolean;

  }

  constructor() { }

  ngOnInit() {

    if (window.matchMedia('(min-width: 810px)')) {
      this.boolean = true;
    }

  }

}
