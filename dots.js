 async function drawChart() {

    // 1. Access data
    
    const nodes = await d3.json("./children.json")
    console.log(nodes[0]);

   
    var height = 400;
    var width = 270;

    let svg = d3.select("#dots")
  .append("svg")
  .attr("width",width)
  .attr("height",height);
  
  var simulation = d3.forceSimulation(nodes)
  .force('charge', d3.forceManyBody())
  .force("x", d3.forceX(0).strength(0.1))
  .force("y", d3.forceY(0).strength(0.1))
  .force("collide",  d3.forceCollide(1).strength(10))
  .force("center", d3.forceCenter());

  let node = svg.append("g")
  .selectAll("circle")
  .data(nodes)
  .join("circle")
  .attr("cx", d => Math.random()*240)
  .attr("cy", d => Math.random()*380)
  .attr("r", 5)
  .attr("stroke", " #FFDDCC")
  .attr("stroke-width", 4)
  .attr("fill", "#FFC947")
  .attr("stroke-opacity", 0.8)
  
  setInterval(() => {
    node.transition()
      .duration(3000)
        .delay(0)
        .attr("cx",d => Math.random()*240)
        .attr("cy",d => Math.random()*380)
  }, 2000)
 
    
    }
    drawChart()