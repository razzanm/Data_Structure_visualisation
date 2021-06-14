
linkedlistsvg = d3.select('#linkedlistsvg');
const nigrect = linkedlistsvg.append('rect').attr('width',1000).attr('height',400).attr('fill','yellow');
nigrect.append('text').text('better').attr('x',50).attr('y',50);


const all11 = d3.selectAll('.node1');
console.log(all11);
console.log('rajan');
all11.transition().duration(2000).attr('x',200);
var root;

function createNode(nodeclass){
    linkedlistsvg.append('rect').attr('width',50).attr('height',30).attr('fill','white').attr('stroke','black').attr('stroke-width',1.5).attr('x',500).attr('y',350).attr('class',nodeclass);
    linkedlistsvg.append('rect').attr('width',30).attr('height',30).attr('fill','white').attr('stroke','black').attr('stroke-width',1.5).attr('x',550).attr('y',350).attr('class',nodeclass);
    linkedlistsvg.append('text').text('Data').attr('x',505).attr('y',370).attr('class',nodeclass);
    linkedlistsvg.append('text').text('Next').attr('x',552).attr('y',370).attr('class',nodeclass).style('font-size','12px');
    linkedlistsvg.append('line').attr('x1',580).attr('y1',365).attr('x2',600).attr('y2',365).attr('class',nodeclass).attr('stroke','black').attr('stroke-width',1.5);
    linkedlistsvg.append('line').attr('x1',595).attr('y1',360).attr('x2',600).attr('y2',365).attr('class',nodeclass).attr('stroke','black').attr('stroke-width',1.5);
    linkedlistsvg.append('line').attr('x1',595).attr('y1',370).attr('x2',600).attr('y2',365).attr('class',nodeclass).attr('stroke','black').attr('stroke-width',1.5);
    const node = d3.selectAll('.' + nodeclass);
    console.log(node);
    return node;
}

function AddrootNode(){
   const root = createNode('rootnode');
   root.transition().duration(300).attr('transform','translate(0,-100)');
}
AddrootNode();
