var w = 500;
var h = 300;
// just update this part
// input topics as nodes
// define links as edges, e.g. if you have 5 topics
// then these topics index are 0, 1, 2, 3, 4
var dataset = {
  nodes:[
      {name:"Topic 1"},
      {name:"Topic 2"},
      {name:"Topic 3"},
      {name:"Topic 4"},
      {name:"Topic 5"},
  ],
  edges:[
      // {source: 0, target: 1},
      {source: 0, target: 2},
      {source: 0, target: 3},
      {source: 0, target: 4},
      {source: 1, target: 2},
      {source: 2, target: 3},
      {source: 2, target: 4},
      {source: 3, target: 4}
  ]
};
var force = d3.layout.force()
            .nodes(dataset.nodes)
            .links(dataset.edges)
            .size([w, h])
            .linkDistance([100])
            .charge([-150])
            .start();

var colors = d3.scale.category10();
// var svg = d3.select("div#ontology_div")
// var svg = d3.select("div")
var svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
var edges = svg.selectAll("line")
        .data(dataset.edges)
        .enter()
        .append("line")
        .style("stroke", "#ccc")
        .style("stroke-width", 1);
var nodes = svg.selectAll("circle")
        .data(dataset.nodes)
        .enter()
        .append("circle")
        .attr("r", 10)
        .style("fill", function(d, i){
          return colors(i);
        })
        .call(force.drag);
        
var label = svg.selectAll(".mytext")
        .data(dataset.nodes)
        .enter()
        .append("text")
          .text(function (d) { return d.name; })
          .style("text-anchor", "middle")
          .style("fill", "#555")
          .style("font-family", "Arial")
          .style("font-size", 12);

 

force.on("tick", function(){
  edges.attr("x1", function(d){ return d.source.x; })
     .attr("y1", function(d){ return d.source.y; })
     .attr("x2", function(d){ return d.target.x; })
     .attr("y2", function(d){ return d.target.y; });
  nodes.attr("cx", function(d){ return d.x; })
     .attr("cy", function(d){ return d.y; });
  label.attr("x", function(d){ return d.x; })
       .attr("y", function (d) {return d.y - 10; });

  
});