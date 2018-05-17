var indx =0;
var bH = 30;
var bW = 200;
var maxVal;
var newNo;
var clicks = 0;
var disClick = 1;
var verified_count = 0;

var asvg = d3.select("#canvase").append("svg")
									.attr('id','first')
                                     .attr("width", 500)
                                     .attr("height", 300);

var data_ab = [ 30 ];
var data_fresh = [90];
var z = 0;
var rGroup = asvg.append("g");
var nrGroup; 
var def = rGroup.append("defs");
var filtr = def.append("filter")
            .attr("id", "drop-shadow")
            .attr("height", "130%");

    filtr.append("feGaussianBlur")
    .attr("in", "SourceAlpha")
      .attr("stdDeviation", 2)
     .attr("result", "blur");

// translate output of Gaussian blur to the right and downwards with 2px
// store result in offsetBlur
    filtr.append("feOffset")
             .attr("in", "blur")
             .attr("dx", 2)
            .attr("dy", 2)
            .attr("result", "offsetBlur");

// overlay original SourceGraphic over translated blurred opacity by using
// feMerge filter. Order of specifying inputs is important!
var feMerg = filtr.append("feMerge");

    feMerg.append("feMergeNode")
            .attr("in", "offsetBlur")
    feMerg.append("feMergeNode")
            .attr("in", "SourceGraphic");
                  


                         
 //Draw the Rectangle that signifies the genesis block
var rectngle = rGroup.selectAll("rect")
                         .data(data_ab)
                         .enter()
                         .append("rect")
                         .attr('class','arect')
                         .attr("x", 150)
                         .attr("y", function(d){
                              return d;
                             })
                             .attr("rx", 15)//rounding off edges
                            .attr("ry",15)
                         .attr("height", bH)
                         .attr("width", bW)
                         .style('fill','white')
                         .style('filter',"url(#drop-shadow)")
                         .attr('stroke','black')

                         .on('click', function() { 
                        	verified_count++
                            d3.select(this).style('fill','#7fff00');});       


                rGroup.append('text').text('Transaction 1')
                                    .attr("x", 170) //x position of the text, should be dynamic
                                     .attr("y",50)
                                     .attr("height", 10)
                                     .attr("width", 40)  
                                     .style('fill', 'black')
                                    
                                     .attr("font-size", "15px")    
                        

function abhiFunc() {
	clicks++
	if (clicks < 5) {
	document.getElementById('message').style.color = 'orange';
	document.getElementById("message").innerHTML = 'New Transaction Added !';
	maxVal = d3.max(data_ab);
	newNo = maxVal + 40;
	data_ab.push(newNo)

	rGroup.selectAll("rect")
		  .data(data_ab)
		  .enter()
         .append("rect")
         .attr('class','arect')
         .attr("x", 150)
         .attr("y", function(d){
              return d;
             })
             .attr("rx", 15)//rounding off edges
            .attr("ry",15)
         .attr("height", bH)
         .attr("width", bW)
         .style('fill','white')
         .style('filter',"url(#drop-shadow)")
         .attr('stroke','black')
         .on('click', function() { 
        	verified_count++
            d3.select(this).style('fill','#7fff00');});

    
    rGroup.append('text').text('Transaction'.concat(clicks + 1))
                                    .attr("x", 170) //x position of the text, should be dynamic
                                     .attr("y",20 + newNo)
                                     .attr("height", 10)
                                     .attr("width", 40)  
                                     .style('fill', 'black')
                                    
                                     .attr("font-size", "15px")                

			}
	else {
		document.getElementById('message').style.color = '#7f0000';
		document.getElementById("message").innerHTML = 'Block Limit Reached !';
		console.log(" block limit");
	}

}

function disFunc() {
	if (verified_count == data_ab.length && disClick < 2) {
		disClick++
		rGroup.selectAll("rect")
			  .transition()
			  .duration(1000)
			  .attr("x", 150)
			  .attr("y", function(d, ia) {
			  	return 110;
			  })
			  .attr("height",0);

		rGroup.selectAll('text')
			  .transition()
			  .attr('y', function() {
			  		return 110;
			  })
			  .attr('font-size','0px');

		setTimeout(function() {
			d3.selectAll('rect.arect').remove();


		rGroup.selectAll('rect')
			  .data(data_fresh)
			  .enter()
			  .append("rect")
                         .attr("x", 30)
                         .attr("y", function(d){
                              return d;
                             })
                             .attr("rx", 20)//rounding off edges
                            .attr("ry",20)
                         .attr("height", 70)
                         .attr("width", 400)
                         .style('fill','white')
                         .style('filter',"url(#drop-shadow)")
                         .attr('stroke','black');

        rGroup.append('text').text('New Block')
                                    .attr("x", 160) //x position of the text, should be dynamic
                                     .attr("y",120)
                                     .attr("height", 10)
                                     .attr("width", 40)  
                                     .style('fill', 'black')
                                    
                                     .attr("font-size", "20px")
		}, 1200)
		
	document.getElementById('message').style.color = '#006400'
	document.getElementById("message").innerHTML = 'Block Created ! Congratulations Miner !. Now proceed to the next step.';
	}

	else {
		document.getElementById('message').style.color = '#7f0000';
		document.getElementById("message").innerHTML = 'Block could not be Approved. Try Again !. Click on the transactions to approve them';
		console.log("All transactions not approved");
	}
}
