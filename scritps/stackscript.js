const stacksvg = d3.select('#stacksvg');
const pushbtn = document.getElementById('pushbtn');
const popbtn = document.getElementById('popbtn');
stacksvg.append('rect').attr('width',500).attr('height',400).attr('fill','dark')
var ptext_y = 355;
poly = [{"x":100, "y":340},
        {"x":110,"y":350},
        {"x":100,"y":360},
        {"x":100,"y":357},
        {"x":50,"y":357},
        {"x":50,"y":343},
        {"x":100,"y":343}];
var p = poly.map(function(poly){
     return [poly.x , poly.y].join(",");
});
 var points = p.join(" ");
 console.log(points);
 var flag = 1;
 var stk  = [];
 var pnt = -1;
 var blocky = 302;
 const colours = ['#7FFFD4','#8A2BE2','#FF4500','#008000','#0000FF','#FFC0CB','#DFFF00','#FFFE93','#1e88e5'];
 const ptxt = stacksvg.append('text');
 const parrow = stacksvg.append('polygon').attr('points','0,0 0,0 0,0 0,0 0,0 0,0 0,0');


(()=>{
    ptxt.transition().duration(2000).attr('x',15).attr('y',355).text('TOP').style('font-weight','bold').attr('fill','#ffffff');
   parrow.transition().duration(3000).attr('points',points).attr('fill','red');
    
    stacksvg.append('line').attr('x1',115).attr('y1',335).attr('x2',115).attr('y2',30).attr('stroke','yellow').style('stroke-width',2);
    stacksvg.append('line').attr('x1',115).attr('y1',335).attr('x2',215).attr('y2',335).attr('stroke','yellow').style('stroke-width',2);
    stacksvg.append('line').attr('x1',215).attr('y1',335).attr('x2',215).attr('y2',30).attr('stroke','yellow').style('stroke-width',2);

  })();

 pushbtn.onclick = insertBlock;
 popbtn.onclick = popBlock;
const topPointer = function (flag) {
    if(flag == 0){
        p = poly.map(function(poly){
            poly.y = poly.y + 32;
            return [poly.x , poly.y].join(",");
           
       });
       points = p.join(" ");
       ptext_y = ptext_y + 32;
    }else{
        p = poly.map(function(poly){
            poly.y = poly.y - 32;
            return [poly.x , poly.y].join(",");
       });
       points = p.join(" ");
       ptext_y = ptext_y - 32;
    }
     
     ptxt.transition().duration(1000).attr('x',15).attr('y',ptext_y);
     parrow.transition().duration(1000).attr('points',points);
}

function createblock(color){
    return stacksvg.append('rect').attr('width',90).attr('height',30).attr('fill',color).attr('x',120);
}

function insertBlock(){
    if(pnt == 8){
        alert("Satck is full");
       return;
    }
    pnt++;
    let col = colours[pnt];
    stk[pnt] = createblock(col);
    console.log(stk);
    console.log(stk[pnt]);
    stk[pnt].transition().duration(2000).attr('y',blocky - pnt * 32).ease(d3.easeBounceOut);
    topPointer(1);
}


function popBlock(){
    if(pnt < 0){
        alert('Stack is Empyt');
        return;
    }
    stk[pnt].transition().duration(2000).attr('y',20).remove();
    pnt--;
    topPointer(0);
}
