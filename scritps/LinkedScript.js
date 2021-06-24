
const linkedlistsvg = d3.select('#linkedlistsvg');
const rootnodebtn = document.getElementById('rootbtn');
const insertfrontbtn = document.getElementById('insertfrontbtn');
const insertEndbtn = document.getElementById('insertEndbtn');
const nigrect = linkedlistsvg.append('rect').attr('width',1200).attr('height',400).attr('fill','yellow');
var root;
var rootindex = 4;
var frontindex = 4;
var endindex = 4;
var nodes = [];
var nulltext;
var nulltextXvalue = 600;

 var poly_rootptr = [{"x":550, "y":245},
        {"x":545,"y":250},
        {"x":540,"y":245},
        {"x":543,"y":245},
        {"x":543,"y":215},
        {"x":547,"y":215},
        {"x":547,"y":245}];
var p2 = poly_rootptr.map(function(poly){
     return [poly.x , poly.y].join(",");
});
 var root_p = p2.join(" ");

var rootptr;
var rootTxt; 
var roottxtXvalue = 530;
var tempptr ;
var temptxt;

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
function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
 }




function AddrootNode(){
   const root = createNode('rootnode');
   rootTxt = linkedlistsvg.append('text').attr('x',roottxtXvalue).attr('y',212).text('Root').style('font-weight', 'bold').attr('fill','green');
   rootptr =  linkedlistsvg.append('polygon').attr('points','0,0 0,0 0,0 0,0 0,0 0,0 0,0').attr('fill','green');
   root.transition().duration(1000).attr('transform','translate(0,-100)');
   rootptr.transition().duration(2000).attr('points',root_p); 
   nodes[rootindex] = root;
   nulltext = linkedlistsvg.append('text').text('NULL').attr('fill','red').attr('x',nulltextXvalue).attr('y',270);
   rootnodebtn.style.display = 'none';
   insertfrontbtn.style.display = 'inline';
   insertEndbtn.style.display = 'inline';
}

async function AddNodetoEnd(){
    if(endindex >= 8){
        window.alert("Linked list does not get full but the app has limit");
        return;
    }
     createtempPtr();
    await moveTempPtr();
    nulltextXvalue += 100;
    nulltext.transition().duration(1000).attr('x',nulltextXvalue);
    let xe = endindex % 4 * 100 + 100;
    endindex++;
    nodes[endindex] = createNode('node' + endindex);
     nodes[endindex].transition().duration(2000).attr('transform','translate(' + xe + ',-100)'); 
    await sleep(2000);
    tempptr.remove();
    temptxt.remove();
}

function AddNodetoFront(){
    if(frontindex < 0){
        window.alert("Linked list does not get full but the app has limit");
        return;
    }
    frontindex--;
    nodes[frontindex] = createNode('node' + frontindex);
    let xt= 400 - frontindex * 100;
    console.log( 400 - frontindex * 100 );
    console.log('translate(' + xt + ',-100')
    nodes[frontindex].transition().duration(2000).attr('transform','translate(-' + xt + ',-100)');
    moveRootPtr();
}

function moveRootPtr(){
    roottxtXvalue -= 100;
     p2 = poly_rootptr.map(function(poly){
         poly.x = poly.x - 100;
        return [poly.x , poly.y].join(",");
   });
     root_p = p2.join(" ");
     rootptr.transition().duration(1000).attr('points',root_p);
     rootTxt.transition().duration(1000).attr('x',roottxtXvalue); 
}

function createtempPtr(){
    tempptr = linkedlistsvg.append('polygon').attr('points','500,0 500,0 500,0 500,0 500,0 500,0 500,0').attr('fill','red');
    tempptr.transition().duration(1000).attr('points',root_p);
    tempptr.attr('transform','translate(15,0)');
    temptxt = linkedlistsvg.append('text').text('Temp').attr('x',roottxtXvalue).attr('y',212).style('font-weight', 'bold').attr('fill','red');
}

async function moveTempPtr() {
    let tempTxtXvalue = roottxtXvalue;
    let transformvalue = 100;
    for(var i = frontindex ; i < nodes.length - 1 ; i++) {
        tempTxtXvalue += 100;
        await sleep(1000);
        tempptr.transition().duration(500).attr('transform','translate(' + transformvalue +',0)');
        temptxt.transition().duration(500).attr('x',tempTxtXvalue);
        transformvalue += 100;
        
    }
}
rootnodebtn.onclick = AddrootNode;
insertfrontbtn.onclick = AddNodetoFront;
insertEndbtn.onclick = AddNodetoEnd;