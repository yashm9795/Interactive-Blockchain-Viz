var margin = {top: 30, right: 30, bottom: 30, left: 30};
	width = 300 - margin.left - margin.right,
	height = 300 - margin.top - margin.bottom;


console.log("hello");


var ysvg = d3.select('#canvas-last').append("svg")
	.attr("width", 500)
	.attr("height",500)
	.attr("xmlns","http://www.w3.org/2000/svg")
	.attr("xmlns:xlink","http://www.w3.org/1999/xlink");
	


var defs = ysvg.append('defs');
var filter = defs.append('filter').attr('id','gooey')
.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom);
filter.append('feGaussianBlur')
	.attr('in','SourceGraphic')
	.attr('stdDeviation','10')
	.attr('result','blur');
filter.append('feColorMatrix')
	.attr('in','blur')
	.attr('mode','matrix')
	.attr('values','1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7')
	.attr('result','gooey');
filter.append('feComposite')
	.attr('in','SourceGraphic')
	.attr('in2','goo')
	.attr('operator','atop');	







  

var y=0


 function myfunction() {
setTimeout(function (){
  y++


ysvg.append("circle")
	
		.attr("class", "flyCircle")
		.attr("cx", 20 )
		.attr("cy", 100)
		.attr("r", 15)
		.style("fill", "#ffd64d")
		.style('stroke','black')
		.style('stroke-width','2px')
        .transition("outwards")
        .attr("cx",function(){return 450 - y*40})
        .attr("cy",100)
        // .attr("cx", function(){return Math.random()*(400-200)+200;})
        // .attr("cy", function(){return Math.random()*(400-200)+200;})
        .duration(3000);
         
 
ysvg.append("circle")
	
		.attr("class", "flyCircle")
		.attr("cx", 20 )
		.attr("cy", 200)
		.attr("r", 15)
		.style("fill", "#ffd64d")
		.style('stroke','black')
		.style('stroke-width','2px')
        .transition("outwards")
        .attr("cx",function(){return 450 - y*40})
        .attr("cy",200)
        // .attr("cx", function(){return Math.random()*(400-200)+200;})
        // .attr("cy", function(){return Math.random()*(400-200)+200;})
        .duration(5000);


// svg.append('svg:image')
//     .attr("xlink:href","./img/32-done.gif")
//    	.attr("x",20)
//    	.attr("y",20)
//    	.attr("width",128)
//    	.attr("height",128);
   



ysvg.append("circle")
	
		.attr("class", "flyCircle")
		.attr("cx", 20 )
		.attr("cy", 300)
		.attr("r", 15)
		.style("fill", "#ffd64d")
		.style('stroke','black')
		.style('stroke-width','2px')
        .transition("outwards")
        .attr("cx", function(){return 450 - y*40})
        .attr("cy",300)
        // .attr("cx", function(){return Math.random()*(400-200)+200;})
        // .attr("cy", function(){return Math.random()*(400-200)+200;})
        .duration(15000);

if (y<5)
	{ myfunction();}

},1000)  } 