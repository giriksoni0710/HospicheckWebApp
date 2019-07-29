import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as d3 from 'd3';
import { json } from 'd3';

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

   compareTable: boolean;
   barGraph: boolean;
  ngOnInit() {

   this.compareTable= true;
    this.barGraph = false;
    
    let query1 = this.route.snapshot.queryParamMap.get('hosp1');

    let query2 = this.route.snapshot.queryParamMap.get('hosp2');

    let hospCheck = this.route.snapshot.queryParamMap.get('hospCheck1');
    // console.log(hospCheck);
 
    this.http.post("http://localhost:3000/searchQuery2", {searchcity1: query1.toString(), searchcity2: query2.toString(), hospCheck: hospCheck.toString()}).toPromise().then(data=>{

      this.maindata = data;
    
    })
    


  }
  displayData(){

    this.compareTable = !this.compareTable;
    this.barGraph = !this.barGraph; 

    if(this.barGraph){

      this.d3view();
    }

  }



/************D3 code */


d3view() {

  console.log(this.maindata);
  console.log(this.maindata[0].rating);

  
    // let svg = d3.select('.Main-Compare')
    // .append('svg')
    // .attr('id','rectCanvas')
    // .attr('width','400')
    // .attr('height','400')
    // .style('background-color','red')
   
    // let rects = svg.selectAll('rect')
    //          .data(this.maindata);

    // rects.enter()
    // .append('rect')
    //     .attr('x', 40)
    //     .attr('y', 50)
    //     .attr('width',40)
    //     .attr('fill','blue')
       
  
        let margin = {
            left: 100,
            right: 10,
            top: 10,
            bottom: 130
        };


        
        let cwidth = 500 - margin.left - margin.right;
        let cHeight = 400 - margin.top - margin.bottom;

        let scale = d3.scaleLinear()  
            .domain([0,400]) 
            .range([cHeight, 0]);

                this.maindata.sort((obj1, obj2)=>{

                    return obj1.height - obj2.height;
                })

                let bscale = d3.scaleBand()
                                .domain(this.maindata.map((d)=>{
                                    return d.rating;
                                }))
                                .range([0,cwidth])
                                .paddingInner(0.3)
                                .paddingOuter(0.4);

               
                let xAxis = d3.axisBottom(bscale);

                let yAxis = d3.axisLeft(scale)
                     .ticks(5)
                     .tickFormat((d)=>{

                        return d + "m";

                     });    


                let svg = d3.select('.Main-Compare')
                    .append('svg')
                        .attr('id','rectCanvas')
                        .attr('width', cwidth+margin.left+margin.right)
                        .attr('height', cHeight+margin.top+margin.bottom)
                        

                        let g = svg.append("g")     
                                .attr("transform", `translate(${ margin.left }, ${margin.top})`);

                        g.append('g')
                         .attr("class", "x-axis")
                         .attr("transform", `translate(0, ${ cHeight })`)
                         .call(xAxis)
                         .selectAll("text")
                            .attr("x", "-5")
                            .attr("y", "10")
                            .attr("text-anchor", "end")
                            .attr("transform", "rotate(-40)");

                     g.append('g')
                          .attr("class", "y-axis")
                           .call(yAxis);  
                           
                     g.append('text')
                        .attr("class", "x-axis-label")
                        .attr("x", cwidth/2)   
                        .attr("y", cHeight + 80)
                        .attr("font-size", "20px")
                        .attr("text-anchor", "middle")
                        .text("Hospital Name");
                        
                        g.append('text')
                        .attr("class", "y-axis-label")
                        .attr("x", -(cHeight/2))   
                        .attr("y", -60)
                        .attr("font-size", "20px")
                        .attr("text-anchor", "middle")
                        .attr("transform", "rotate(-90)")
                        .text("Rating");

                    let rects = g.selectAll('rect')
                        .data(this.maindata);

                    rects.enter()
                        .append('rect')
                            .attr('x', (this.maindata.rating))
                            .attr('y', (50))
                            .attr('width',bscale.bandwidth)
                            .attr('height', 50)
                            .attr('fill','orangered');      
                           
                           

    
  }
}
