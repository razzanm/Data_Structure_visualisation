const queuesvg = d3.select('#queuesvg');
queuesvg.append('rect').attr('width',500).attr('height',300).attr('fill','black');
const inqueuebtn = document.getElementById('inqueuebtn');
const dequeuebtn = document.getElementById('dequeuebtn');

var f_x ;
var poly_f = [{"x":45, "y":50},
        {"x":40,"y":55},
        {"x":35,"y":50},
        {"x":38,"y":50},
        {"x":38,"y":20},
        {"x":42,"y":20},
        {"x":42,"y":50}];
var p1 = poly_f.map(function(poly){
     return [poly.x , poly.y].join(",");
});
 var point_f = p1.join(" ");

 var poly_r = [{"x":50, "y":50},
        {"x":45,"y":55},
        {"x":40,"y":50},
        {"x":43,"y":50},
        {"x":43,"y":20},
        {"x":47,"y":20},
        {"x":47,"y":50}];
var p2 = poly_r.map(function(poly){
     return [poly.x , poly.y].join(",");
});
 var point_r = p2.join(" ");

 var xftxt = 38;
 var xrtxt = 45;

 var que = [];
 var fpointer = -1;
 var rpointer = -1;
 const qcolours = ['#7FFFD4','#8A2BE2','#FF4500','#008000','#0000FF','#FFC0CB','#DFFF00','#FFFE93','#1e88e5','#FF1493'];

 var fptr = queuesvg.append('polygon').attr('points','0,0 0,0 0,0 0,0 0,0 0,0 0,0').attr('fill','green');
 var rptr = queuesvg.append('polygon').attr('points','500,0 500,0 500,0 500,0 500,0 500,0 500,0').attr('fill','red');
 var fprtxt = queuesvg.append('text').attr('x',4).attr('y',15).text('F').attr('fill','white');
 var rprtxt = queuesvg.append('text').attr('x',450).attr('y',15).text('R').attr('fill','white')
 var lineup = queuesvg.append('line').attr('stroke','yellow').attr('stroke-width',2).attr('x1',50).attr('y1',60).attr('x2',50).attr('y2',60);
 var linedown = queuesvg.append('line').attr('stroke','yellow').attr('stroke-width',2).attr('x1',50).attr('y1',160).attr('x2',50).attr('y2',160);

 inqueuebtn.onclick = inqueue;
 dequeuebtn.onclick = dequeue;

 (() => {
   fptr.transition().duration(2000).attr('points',point_f);
   rptr.transition().duration(2000).attr('points',point_r); 
   fprtxt.transition().duration(2000).attr('x',38);
   rprtxt.transition().duration(2000).attr('x',45);
   lineup.transition().duration(2000).attr('x1',50).attr('y1',60).attr('x2',400).attr('y2',60);
   linedown.transition().duration(2000).attr('x1',50).attr('y1',160).attr('x2',400).attr('y2',160);
 })();

 function movepointers(qflag){
      if(qflag == 1){
          p2 = poly_r.map(function(poly){
               poly.x = poly.x + 32;
               return [poly.x , poly.y].join(",");
          });
            point_r = p2.join(" ");
            rptr.transition().duration(2000).attr('points',point_r);
            xrtxt = xrtxt + 32;
            rprtxt.transition().duration(2000).attr('x',xrtxt);
      }
      else if(qflag == 2){
          p1 = poly_f.map(function(poly){
               poly.x = poly.x + 32;
              return [poly.x , poly.y].join(",");
         });
           point_f = p1.join(" ");
           fptr.transition().duration(2000).attr('points',point_f);
           xftxt = xftxt + 32;
           fprtxt.transition().duration(2000).attr('x',xftxt);
      }else{
          p2 = poly_r.map(function(poly){
               poly.x = poly.x + 32;
               return [poly.x , poly.y].join(",");
          });
            point_r = p2.join(" ");
            rptr.transition().duration(2000).attr('points',point_r);
            xrtxt = xrtxt + 32;
            rprtxt.transition().duration(2000).attr('x',xrtxt);

            p1 = poly_f.map(function(poly){
               poly.x = poly.x + 32;
              return [poly.x , poly.y].join(",");
         });
           point_f = p1.join(" ");
           fptr.transition().duration(2000).attr('points',point_f);
           xftxt = xftxt + 32;
           fprtxt.transition().duration(2000).attr('x',xftxt);
      }

      
      
 }

 function drawqueueblock(color){
      return queuesvg.append('rect').attr('width',30).attr('height',90).attr('fill',color).attr('x',500).attr('y',65);
 }

 function inqueue(){
   if(rpointer == 9){
        alert('Queue is full.');
        return;
   }
   rpointer++;
   que[rpointer] = drawqueueblock(qcolours[rpointer]);
   que[rpointer].transition().duration(2000).attr('x', 60 + rpointer * 32);
   if(fpointer == -1){
     fpointer++;
     movepointers(0)
}else{
     movepointers(1);
}

 }


 function dequeue(){
      if(fpointer == -1 || fpointer > rpointer){
           alert('Queue is empty');
           return;
      }
      que[fpointer].transition().duration(2000).attr('x',0).remove();
      fpointer++;
      movepointers(2);
 }

