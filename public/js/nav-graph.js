document.addEventListener("DOMContentLoaded", function() {
  const nodes = window.navNodes || [{ id: "root", label: "Home", url: "/" }];
  const links = nodes.filter(d => d.parent).map(d => ({ source: d.parent, target: d.id }));
  const width = 700, height = 420;

  const svg = d3.select("#nav-graph").append("svg").attr("width", width).attr("height", height);
  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(120))
    .force("charge", d3.forceManyBody().strength(-400))
    .force("center", d3.forceCenter(width/2, height/2));

  const link = svg.append("g").attr("stroke", "#888").selectAll("line")
    .data(links).enter().append("line").attr("stroke-width", 2);

  const node = svg.append("g").selectAll("circle")
    .data(nodes).enter().append("circle")
    .attr("r", 22)
    .attr("fill", "#12943C")
    .call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));
  
  const label = svg.append("g").selectAll("text")
    .data(nodes).enter().append("text")
    .text(d => d.label)
    .attr("text-anchor", "middle")
    .attr("dy", 5)
    .style("fill", "#fff")
    .style("pointer-events", "none");

  node.on("click", d => { if (d.url) window.location.href = d.url; });

  simulation.on("tick", () => {
    link.attr("x1", d => d.source.x).attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
    node.attr("cx", d => d.x).attr("cy", d => d.y);
    label.attr("x", d => d.x).attr("y", d => d.y);
  });

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x; d.fy = d.y;
  }
  function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null; d.fy = null;
  }
});
