
var ht = 0 ;
var j=0;
var maxvalue =0;
var newNumber = 0; 
var counter=1;

var MD5 = [0x00000000, 0xd76aa478, 0xe8c7b756, 0x242070db,
                  0xc1bdceee, 0xf57c0faf, 0x4787c62a, 0xa8304613,
                  0xfd469501, 0x698098d8, 0x8b44f7af, 0xffff5bb1,
                  0x895cd7be, 0x6b901122, 0xfd987193, 0xa679438e,
                  0x49b40821, 0xf61e2562, 0xc040b340, 0x265e5a51,
                  0xe9b6c7aa, 0xd62f105d, 0x02441453, 0xd8a1e681,
                  0xe7d3fbc8, 0x21e1cde6, 0xc33707d6, 0xf4d50d87,
                  0x455a14ed, 0xa9e3e905, 0xfcefa3f8, 0x676f02d9,
                  0x8d2a4c8a, 0xfffa3942, 0x8771f681, 0x6d9d6122,
                  0xfde5380c, 0xa4beea44, 0x4bdecfa9, 0xf6bb4b60,
                  0xbebfbc70, 0x289b7ec6, 0xeaa127fa, 0xd4ef3085,
                  0x04881d05, 0xd9d4d039, 0xe6db99e5, 0x1fa27cf8,
                  0xc4ac5665, 0xf4292244, 0x432aff97, 0xab9423a7,
                  0xfc93a039, 0x655b59c3, 0x8f0ccc92, 0xffeff47d,
                  0x85845dd1, 0x6fa87e4f, 0xfe2ce6e0, 0xa3014314,
                  0x4e0811a1, 0xf7537e82, 0xbd3af235, 0x2ad7d2bb,
                  0xeb86d391];

var DATA = []


//Crypto Parameters
var index =0;
var previousHash=0;
var newHash = 0;
var data = 0;
var bHeight=70;
var bWidth=400;


//Make an SVG Container
var svgContainer = d3.select("#canvas1").append("svg")
                                     .attr("width", 500)
                                     .attr("height", 450);

var dataset = [ 30 ];
var z =0;
var rectGroup = svgContainer.append("g"); 
var defs = rectGroup.append("defs");
var filter = defs.append("filter")
            .attr("id", "drop-shadow")
            .attr("height", "130%");

    filter.append("feGaussianBlur")
    .attr("in", "SourceAlpha")
      .attr("stdDeviation", 2)
     .attr("result", "blur");

// translate output of Gaussian blur to the right and downwards with 2px
// store result in offsetBlur
    filter.append("feOffset")
             .attr("in", "blur")
             .attr("dx", 5)
            .attr("dy", 5)
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
                         .data(dataset)
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
                         

                         .on('mouseover', function(d, i) { 
                            d3.select(this).transition().duration(1000).attr("x",50).style('fill','orange');})                 
                         .on('mouseout', function(d, i) { d3.select(this).transition().duration(1000).attr("x", 30).style('fill','white');})

 
                rectGroup.append('text').text('Genesis Block')
                                    .attr("x", 140) //x position of the text, should be dynamic
                                     .attr("y",50)
                                     .attr("height", 30)
                                     .attr("width", 120)  
                                     .style('fill', 'black')
                                    
                                     .attr("font-size", "20px")
                                     

                rectGroup.append('text').text(' Hash is '+ MD5[z++])
                                    .attr("x", 70)
                                     .attr("y",75)
                                     .attr("height", 10)
                                     .attr("width", 40)
                                     .attr("font-size","10px")  
                                     .style('fill', 'black') ; 


                rectGroup.append('text').text('Data is '+ data)
                                    .attr("x", 300)
                                     .attr("y",75)
                                     .attr("height", 10)
                                     .attr("width", 40)  
                                     .attr("font-size","10px")  
                                     .style('fill', 'black') ; 
                                     
                               
   d3.select("#content2").append("button")
    .text("Add a new Block")
    .on("click",function harshClick(){
if(gflag == true) {
    gflag = false;
j = z + 1;
counter++;

DATA = Math.random();
                             maxValue = d3.max(dataset);
                            console.log("Max Value is " + maxValue);
                             newNumber = maxValue + 80;	
                             textNumber = newNumber; // change this to adjust text postion
                            console.log("Pushing New number " + newNumber);
                            dataset.push(newNumber);

                            if ( counter % 2 == 0)
                                    {
                                        transX=10;
                                    }
                                    else{
                                        transX=50;
                                    }
                            console.log("value of transX is "+ transX);
                            

                            rectGroup.selectAll("rect")
                                     .data(dataset)
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

                                  
                                   
                                 .on('mouseover', function(d, i) { d3.select(this).transition().duration(500).attr("x",transX).style('fill','orange');})                 
                                 .on('mouseout', function(d, i) { d3.select(this).transition().duration(500).attr("x", 30).style('fill','white');})
                                    
                                    
                                    
                                    
                                    


                         


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

                                     rectGroup.append('text').text('Prev Hash is ' + MD5[z-1])
                                    .attr("x", 50)
                                     .attr("y", textNumber + 40 )
                                     .attr("height", 30)
                                     .attr("width", 120) 
                                     .attr("font-size", "10px")
                                     .transition()
                                     .duration(1000) 
                                     .style('fill', 'black') ;  
                                     
                                     rectGroup.append('text').text('New Hash is ' + MD5[z++])
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
                
                             
                  
                             
                                   
}
else {
      document.getElementById("goback").innerHTML="Go Back to Previous Section to get your block approved by Peers";
      document.getElementById("goback").style.color='red';
}
                               
                }) // on click function ends