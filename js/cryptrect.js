



    var ht = 0 ;
    var j=0;
    var maxvalue =0;
    var newNumber = 0; 
    var counter=1;
    var k=1;
    var pc=0;
    var z=0;
    var cc=0;//for creating id for paths linking each block
    var cf=0;
    
    var points = {
                     x          :20,
                     y          : 30

               };

console.log ( "is this working" +points.x);



    //console.log("X value is "+ points[x]);

    

var MD5 = ["0x00000000", "0xd76aa478", "0xe8c7b756", "0x242070db","0xc1bdceee", "0xf57c0faf", "0x4787c62a", "0xa8304613"];
                 

var DATA = []


//Crypto Parameters
var index =0;
var previousHash=0;
var newHash = 0;
var data = 0;
var bHeight=70;
var bWidth=400;


//Make an SVG Container
 var svgCo = d3.select("#crypt").append("svg")
                                     .attr("width", 500)
                                     .attr("height", 450);

 var data_h = [ 30 ];
 var i =0;
                        var rectGroup = svgCo.append("g"); 
                             
                             var defs = rectGroup.append("defs");
                             var filter = defs.append("filter")
                                              .attr("id", "drop-shadow")
                                              .attr("height", "30%");

                                            filter.append("feGaussianBlur")
                                              .attr("in", "SourceAlpha")
                                              .attr("stdDeviation", 5)
                                              .attr("result", "blur");

// translate output of Gaussian blur to the right and downwards with 2px
// store result in offsetBlur
                                        filter.append("feOffset")
                                                 .attr("in", "blur")
                                                 .attr("dx", 3)
                                                 .attr("dy", 3)
                                                 .attr("result", "offsetBlur");

// overlay original SourceGraphic over translated blurred opacity by using
// feMerge filter. Order of specifying inputs is important!
                                    var feMerge = filter.append("feMerge");

                                        feMerge.append("feMergeNode")
                                                .attr("in", "offsetBlur")
                                                feMerge.append("feMergeNode")
                                                .attr("in", "SourceGraphic");
                  


                         
 //Draw the Rectangle that signifies the genesis block
 var rectangle = rectGroup.selectAll("rect")
                             .data(data_h)
                             .enter()
                             .append("rect")
                             .attr("x", 30)
                             .attr("y", function(d){
                                  return d;
                                 })
                                 .attr("rx", 20)//rounding off edges
                                .attr("ry",20)
                             .attr("height", bHeight)
                             .attr("width", bWidth)
                             .style('fill','white')
                             .style('filter',"url(#drop-shadow)")
                             .attr('stroke','black')

                             //.on('mouseover', function(d, i) { d3.select(this).transition().duration(500).style('fill','orange');})                 
                             //.on('mouseout', function(d, i) { d3.select(this).transition().duration(500).style('fill','white');})

 
                rectGroup.append('text').text('Genesis Block')
                                    .attr("x", 140) //x position of the text, should be dynamic
                                     .attr("y",50)
                                     .attr("height", 30)
                                     .attr("width", 120)  
                                     .style('fill', 'black')
                                     .attr("font-family", "NIDUS SANS")
                                    
                                     .attr("font-size", "20px")
                                    // .attr("fill", "red");

                rectGroup.append('text').attr('class','hhash'.concat(cc)) // appending genesis block hash to hash0 group
                                    .text(' Hash is '+ MD5[i++])
                                    .attr("x", 70)
                                     .attr("y",75)
                                     .attr("height", 30)
                                     .attr("width", 120)  
                                     .attr("font-size","10px") 
                                     .style('fill', 'black') ; 


                rectGroup.append('text').text('Data is '+ data)
                                    .attr("x", 300)
                                     .attr("y",75)
                                     .attr("height", 30)
                                     .attr("width", 120)  
                                     .attr("font-size","10px") 
                                     .style('fill', 'black') ; 
                                     
                               
   console.log("Value of cc is " + cc);



d3.select("#content2").append("button")

    .text("Add a new Block")
    .on("click",function(){

     
        if (  gflag == true){

        gflag=false;


j = z +1;
counter++;
DATA = Math.random();
                            if ( data_h.length < 6 ){

                    
                            console.log("dataset " + data_h);
                             maxValue = d3.max(data_h);
                            console.log("Max Value is " + maxValue);
                             newNumber = maxValue + 80;	
                             textNumber = newNumber ; // change this to adjust text postion
                            console.log("Pushing New number " + newNumber);
                            data_h.push(newNumber);
                            

                            rectGroup.selectAll("rect")
                                     .data(data_h)
                                     .enter()
                                     .append("rect")
                                     //.transition()
                                     //.duration(1000)
                                     .attr("x", 30)
                                     .attr("y", function(d){
                                               return d;
                                               })
                                    .attr("rx", 20) // rounding off edges
                                    .attr("ry",20)
                                    .attr("height", bHeight)
                                    .attr("width", bWidth)
                                    .style('fill','white')
                                    .style('filter',"url(#drop-shadow)")
                                    .attr('stroke','black')
                                    .on('mouseover', function(d, i) 
                                 
                                 { 
                                     
                                   // d3.select(this).transition().duration(500).style('fill','orange');
                                
                                
                                })                 
                                 .on('mouseout', function(d, i) 
                                 { 
                                     
                                  //  d3.select(this).transition().duration(500).style('fill','white');
                                
                                })
                                                       
                                rectGroup.append('text').text('Block ' + j)
                                .attr("x", 180)
                                 .attr("y", textNumber + 20)
                                 .style('fill', 'black')
                                 .attr("font-size", "20px")
                                 .attr("height", 30)
                                 .attr("width", 120) 
                                 .transition()
                                 .duration(1000) 
                                 .style('fill', 'black') ;   

                                 rectGroup.append('text').attr('class','phhash'.concat(cc))
                                 .text('Prev Hash is ' + MD5[z-1])
                                .attr("x", 50)
                                 .attr("y", textNumber + 40 )
                                 .attr("height", 30)
                                 .attr("width", 120) 
                                 .attr("font-size", "10px")
                                 .transition()
                                 .duration(1000) 
                                 .style('fill', 'black') ;  
                                 
                                 rectGroup.append('text').attr('class','hhash'.concat(++cc))
                                 .text('New Hash is ' + MD5[z++])
                                .attr("x", 250)
                                 .attr("y", textNumber + 40 )
                                 .attr("height", 30)
                                 .attr("width", 120) 
                                 .attr("font-size", "10px")
                                 .transition()
                                 .duration(1000) 
                                 .style('fill', 'black') ;   

                                 rectGroup.append('text').text('Data ' + DATA)
                                .attr("x", 150)
                                 .attr("y", textNumber + 60)
                                 .attr("height", 30)
                                 .attr("width", 120) 
                                 .attr("font-size", "10px")
                                 .transition()
                                 .duration(1000) 
                                 .style('fill', 'black') ;   
            
                         
              
                         


                 //Bezier line to connect the blocks
                 
                 
                 var bezierLine = d3.svg.line()
                         .x(function(d) { return d[0]; })
                         .y(function(d) { return d[1]; })
                         .interpolate("linear");

                        var svg = d3.select("#bezier-demo1")
                                    .append("svgCo")
                                    .attr("width", 300)
                                    .attr("height", 150);
    
            svgCo.append('path')
                //.attr("d", bezierLine([ [680, 120], [780, 120], [780, 420],[680,420]]))
                //.attr("d", bezierLine([ [680, 80+k*1.05], [780, 80+k*1.05], [780, 380+k*1.05],[680,(380+k*1.05)]]))
               // .attr("d", bezierLine([ [180, 80+k*1.05], [280, 80+k*1.05], [280, 380+k*1.05],[180,(380+k*1.05)]]))
               //.attr("d", bezierLine([ [430, 70], [490, 70], [490, 140],[430,140]]))
                 .attr("d", bezierLine([ [430, 60+k*1.05], [490, 60+k*1.05], [490, 130+k*1.05],[430,130+k*1.05]]))
                 .attr("stroke", "black")
                 .attr('class',function(){  return pc++ ;   }) // assigning unique id to path
                 .attr("stroke-width", 5)
                 .attr("fill", "none")
                 .on("mouseover", function(d,i) {
                                        var ix = d3.select(this).attr('class');
                                                 d3.select("text.hhash".concat(ix)).style("fill","orange");
                                                 d3.select("text.phhash".concat(ix)).style("fill","orange");
                                                   
                // d3.selectAll("text").style("fill","orange");

        })
                  .on("mouseout", function(d,i) {
                                          var ix = d3.select(this).attr('class');
                                                d3.select("text.hhash".concat(ix)).style("fill",null);
                                                d3.select("text.phhash".concat(ix)).style("fill",null);
       
        })
             
                     .transition()
                     .duration(2500)
                    .attrTween("stroke-dasharray", function() {
                    var len = this.getTotalLength();
            return function(t) { return (d3.interpolateString("0," + len, len + ",0"))(t) };
                
                             
        })
        
                             
          k=k+80;                       

        }
    }
        else {
            document.getElementById("goback").innerHTML="Go Back to Previous Section to get your block approved by Peers";
            document.getElementById("goback").style.color='#7f0000';
      }              
                }) // on click function ends



//First Block of the Viz


