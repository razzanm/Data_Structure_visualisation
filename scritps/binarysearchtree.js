const binarySearchTreeSvg = d3.select("#binarysearchtreesvg");
const insertnodebtn = document.getElementById("insertintree");
const binrect = binarySearchTreeSvg
  .append("rect")
  .attr("width", 700)
  .attr("height", 400)
  .attr("fill", "yellow");
// binarySearchTreeSvg.append('rect').attr('width',60).attr('height',30).attr('x',270).attr('y',50)
//  binarySearchTreeSvg.append('rect').attr('width',80).attr('height',30).attr('x',170).attr('y',150)
//  binarySearchTreeSvg.append('rect').attr('width',80).attr('height',30).attr('x',370).attr('y',150)
//  binarySearchTreeSvg.append('rect').attr('width',80).attr('height',30).attr('x',50).attr('y',250)
//  binarySearchTreeSvg.append('rect').attr('width',80).attr('height',30).attr('x',190).attr('y',250)
//  binarySearchTreeSvg.append('rect').attr('width',80).attr('height',30).attr('x',320).attr('y',250)
//  binarySearchTreeSvg.append('rect').attr('width',80).attr('height',30).attr('x',450).attr('y',250)
var nodenumber = 0;
var nodevalues = [];
var nodepositions = [
  { x: 270, y: 50 },
  { x: 170, y: 150 },
  { x: 370, y: 150 },
  { x: 50, y: 250 },
  { x: 190, y: 250 },
  { x: 320, y: 250 },
  { x: 450, y: 250 },
];
console.log(nodepositions[0].x);
function createTreeNode(data, indexval, prevrootindex) {
  binarySearchTreeSvg
    .append("rect")
    .attr("width", 20)
    .attr("height", 30)
    .attr("x", nodepositions[indexval].x)
    .attr("y", nodepositions[indexval].y)
    .attr("class", "node" + nodenumber)
    .style("stroke-width", 2)
    .style("stroke", "red");
  binarySearchTreeSvg
    .append("rect")
    .attr("width", 30)
    .attr("height", 30)
    .attr("x", nodepositions[indexval].x + 20)
    .attr("y", nodepositions[indexval].y)
    .attr("class", "node" + nodenumber)
    .style("stroke-width", 2)
    .style("stroke", "red");
  binarySearchTreeSvg
    .append("rect")
    .attr("width", 20)
    .attr("height", 30)
    .attr("x", nodepositions[indexval].x + 50)
    .attr("y", nodepositions[indexval].y)
    .attr("class", "node" + nodenumber)
    .style("stroke-width", 2)
    .style("stroke", "red");
  binarySearchTreeSvg
    .append("text")
    .text("L")
    .attr("x", nodepositions[indexval].x + 5)
    .attr("y", nodepositions[indexval].y + 17)
    .style("font-size", "15px")
    .style("fill", "white")
    .attr("class", "node" + nodenumber);
  binarySearchTreeSvg
    .append("text")
    .text("R")
    .attr("x", nodepositions[indexval].x + 55)
    .attr("y", nodepositions[indexval].y + 17)
    .style("font-size", "15px")
    .style("fill", "white")
    .attr("class", "node" + nodenumber);
  binarySearchTreeSvg
    .append("text")
    .text(data)
    .attr("x", nodepositions[indexval].x + 25)
    .attr("y", nodepositions[indexval].y + 17)
    .style("font-size", "15px")
    .style("fill", "white")
    .attr("class", "node" + nodenumber);
  if (indexval != 0) {
    binarySearchTreeSvg
      .append("line")
      .attr("x1", nodepositions[prevrootindex].x + 35)
      .attr("y1", nodepositions[prevrootindex].y + 30)
      .attr("x2", nodepositions[indexval].x + 35)
      .attr("y2", nodepositions[indexval].y)
      .attr("stroke-width", 2)
      .attr("stroke", "red");
  }
  var n = d3.selectAll(".node" + nodenumber);
  nodenumber++;
  return n;
}

insertnodebtn.onclick = () => {
  let inputfield = document.getElementById("treedatainput");
  let valuegot = parseInt(inputfield.value);
  inputfield.value = "";
  let previnex = 0;
  let curinex = 0;

  if (nodenumber < 7) {
    if (nodevalues[0] == undefined) {
      createTreeNode(valuegot, 0, 0);
      nodevalues[0] = valuegot;
    } else {
      while (nodevalues[curinex] != undefined) {
        if (nodevalues[curinex] > valuegot) {
          previnex = curinex;
          curinex = curinex * 2 + 1;
         
        } else {
          previnex = curinex;
          curinex = curinex * 2 + 2;
        
        }
      }
      createTreeNode(valuegot, curinex, previnex);
      nodevalues[curinex] = valuegot;
    }
    
  }else{
    window.alert("Animation is limited");
  }
};
