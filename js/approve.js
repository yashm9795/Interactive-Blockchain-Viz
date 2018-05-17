var numB = 0;
var numT = 0;
var coinRadius = 0;
var gk = 0;


function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
} 

var coinSound;

coinSound = new sound('ka-ching.mp3');
       

var createNodes = function (numNodes, radius) {
 var nodes = [], 
     width = (radius * 2) + 50,
     height = (radius * 2) + 50,
     angle,
     x,
     y,
     i;
 for (i=0; i<numNodes; i++) {
  angle = (i / (numNodes/2)) * Math.PI; // Calculate the angle at which the element will be placed.
                                        // For a semicircle, we would use (i / numNodes) * Math.PI.
  x = (radius * Math.cos(angle)) + (width/2); // Calculate the x position of the element.
  y = (radius * Math.sin(angle)) + (width/2); // Calculate the y position of the element.
  nodes.push({'id': i, 'x': x, 'y': y});
 }
 coinRadius = radius;
 return nodes;
}

var createSvg = function (radius, callback) {
 d3.select('#canvas').selectAll('svg').remove();
 var svg = d3.select('#canvas').append('svg:svg')
            .attr('transform','translate(' + 20 + ',' + 5 + ')')
            .attr('width', (radius * 2) + 50)
            .attr('height', (radius * 2) + 50);
 callback(svg);
}

var createElements = function (svg, nodes, elementRadius) {
numB = 0;
 element = svg.selectAll('circle')
                .data(nodes)
              .enter().append('svg:circle')
                .attr('r', elementRadius)
                .attr('cx', function (d, i) {
                  return d.x;
                })
                .attr('cy', function (d, i) {
                  return d.y;
                })
                .style('fill', function(d, i) {
                    
                    if (Math.floor(Math.random()*(i+1))%2 == 0) { 
                      
                      return 'grey';
                    }
                    else {
                      numB += 1;
                      return 'green';

                    }
                });
          


                if ((numB / nodes.length) > 0.5) {
                        document.getElementById('viz-2-response').innerHTML = 'Block approved by peers. Here is your reward !';
                        coinSound.play();
                        coinAppear(gk);
                        gflag = true;
                        document.getElementById("goback").innerHTML="";
                      }
                      else {
                        gflag = false;
                        document.getElementById('viz-2-response').innerHTML = 'Block not approved, try again';
                        //document.getElementById('myCoin').style.display = "none";
                        }
/*
                .on("click", function(){
                  if (d3.select(this).style('fill') == 'rgb(128, 128, 128)') { 
                    d3.select(this).transition().delay(100).style('fill','green');
                    numB += 1;
                    if ((numB / nodes.length) > 0.5) document.getElementById('test').innerHTML = 'Yes';
                    else document.getElementById('test').innerHTML = 'No';
                  }
                  else {
                    d3.select(this).transition().delay(100).style('fill','grey');
                    numB -= 1;
                    if ((numB / nodes.length) > 0.5) document.getElementById('test').innerHTML = 'Yes';
                    else document.getElementById('test').innerHTML = 'No';
                  }
                });*/


}
var coinAppear  = function(k) {
            document.getElementById('myCoin'.concat(k)).style.display = "block";
            gk+=1;

           }


var draw = function () {
 var numNodes = $("#numNodes").val() || 15;
 numT = numNodes;
 var radius = $("#radius").val() || 200;
 var nodes = createNodes(numNodes, radius);
 createSvg(radius, function (svg) {
   createElements(svg, nodes, 10);
 });
}



$(document).ready(function() {
    draw();
});

$("#radius, #numNodes").bind('keyup', function(e) {
    draw();
});