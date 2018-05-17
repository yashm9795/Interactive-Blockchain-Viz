

//Crypto Parameters

var bHeight=200;
var bWidth=650;
var ht = 0 ;
   
    var cc=0;//for creating id for paths linking each block
    var text=["Hash hides the information about transactions that a block is composed of.","Data is the information a particular block holds.", "Block number is the index of the particular block in the entire Blockchain."]
   // var text =["INFO1","INFO2","INFO3"];
    var points = {
                     x          :20,
                     y          : 30

               };

             



//Crypto Parameters
var index =0;
var previousHash=0;
var newHash = 0;
var data = 0;
var bHeight=70;
var bWidth=400;

var svgC = d3.select('#bezier-demo').append("svg")
                                     .attr("width", 600)
                                     .attr("height",300);

                                     var gentext = d3.select('#bezier-demo')
                                                     .append("div")
                                                     .attr('class', 'gentext');
                                                    

 var dataset = [ 120 ];
 var i =0;
                        var rectG = svgC.append("g"); 
                             
                             var defs = rectG.append("defs");
                             var filter = defs.append("filter")
                                              .attr("id", "drop-shadow")
                                              .attr("height", "330%");

                                        filter.append("feGaussianBlur")
                                              .attr("in", "SourceAlpha")
                                              .attr("stdDeviation", 10)
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
 var rectangle = rectG.selectAll("rect")
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
                             .on ('click', handleclick)
                             //.on('mouseover', function(d, i) { d3.select(this).transition().duration(500).style('fill','orange');})                 
                             .on('mouseout', function(d, i) 
                              {
                                   d3.select(this).transition().duration(500).style('fill','white');
                                });
                          

 
                rectG.append('text').text('Block')
                                    .attr("x", 180) //x position of the text, should be dynamic
                                     .attr("y",150)
                                     .attr("height", 20)
                                     .attr("width", 200)  
                                     .style('fill', 'black')
                                     .attr("font-family", "NIDUS SANS")
                                    
                                     .attr("font-size", "20px")
                                     .on("mouseover", function() {
                                                                    return gentext.style("visibility", "visible").text('');
                                                                 })
                                    // .attr("fill", "red");

                                    rectG.append('text').text('')
                                    .attr("x", 0) //x position of the text, should be dynamic
                                     .attr("y",60)
                                     .attr("height", 30)
                                     .attr("width", 120)  
                                     .style('fill', 'black')
                                     //.attr("font-family", "NIDUS SANS")
                                    
                                     .attr("font-size", "15px")
                                    // .attr("fill", "red");


                rectG.append('text').attr('class','hash'.concat(cc)) // appending genesis block hash to hash0 group
                                    .text(' Data is '+ "782.6")
                                    .attr("x", 300)
                                     .attr("y",180)
                                     .attr("height", 30)
                                     .attr("width", 120)  
                                     .attr("font-size","10px") 
                                     .style('fill', 'black') ; 


                rectG.append('text').text('Hash is 0083xF2sd12cdf213')
                                    .attr("x",70)
                                     .attr("y",180)
                                     .attr("height", 30)
                                     .attr("width", 120)  
                                     .attr("font-size","10px") 
                                     .style('fill', 'black') ; 
                                     

function handleclick ()

{
    
console.log ("Inside Handle Click");

   for ( loop =0;loop <=2;loop++)
   {

    if (loop ==0)//Hash
    {
     var xpos1=120;
     var xpos2=120;
     var ypos1=185;
     var ypos2=250;

    }
    else if (loop==1) { //Data
    
       xpos1 = 330 ;
       xpos2= 330;
       ypos1= 185   ;
       ypos2=210;
    }
    else//Block
    {
        console.log("third loop is running");
        xpos1 = 210 ;
        xpos2= 210 ;
        ypos1= 130   ;
        ypos2=80;
    }
   


   var bezierLine = d3.svg.line()
                         .x(function(d) { return d[0]; })
                         .y(function(d) { return d[1]; })
                         .interpolate("linear");

                        var svg = d3.select("#bezier-demo")
                                    .append("svgC")
                                    .attr("width", 300)
                                    .attr("height", 150);


    svgC.append('path')
              
                 .attr("d", bezierLine([ [xpos1,ypos1], [xpos2, ypos2]]))
                 .attr("stroke", "black")
                 .attr("stroke-width", 1)
                 .attr("fill", "none")
                 .transition()
                 .duration(3000)
                 .attrTween("stroke-dasharray", function() {
                  
                    var len = this.getTotalLength();
                    return function(t) { return (d3.interpolateString("0," + len, len + ",0"))(t) }
                
            //.append('text').text('Test')            
        })

        if (loop==2){

            ypos2=ypos2-20;
        }
        else if ( loop == 1){
            xpos2 = xpos2;
            ypos2 = ypos2;
        }

        else {

              xpos2=xpos2+50;
        }
        
        rectG.append('text').text(text[loop])
                                     .transition()
                                     .duration(5000)
                                     .attr("x",xpos2 -150 )
                                     .attr("y",ypos2+10)
                                     .attr("height", 30)
                                     .attr("width", 120)  
                                     .attr("font-size","8px") 
                                     .style('fill', 'black') ;     
                                     
                    
    }
    }
