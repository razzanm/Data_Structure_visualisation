//selecting the svg element from html document.
const svg = d3.select('#arraysvg');
const water = svg.append('rect').attr('width',500).attr('height',300).attr('fill','deepskyblue');

//Getting the reference to the different html elements.
 const btncreatearray = document.getElementById('createarray');
 const arrayspace = document.getElementById('arrayspace');
 const indexinput = document.getElementById('index');
 const datainput = document.getElementById('data');
 const enterdatabtn = document.getElementById('Enterdata');
 const getindexfield = document.getElementById('getindex');
 const getdatabtn = document.getElementById('btngetdata');
 const resultfield = document.getElementById('resultfetch');

 var arrayrect;
 var arraytxt;

//Assigning the onclick callback function on different buttons.
 btncreatearray.onclick = createarray;
 enterdatabtn.onclick = enterdatainarray;
 getdatabtn.onclick = getdatafromarray;
 

//function which creats the first structue of the array visualization
 function createarray(){
     svg.append('text').attr('x',30).attr('y',30).text('Index').attr('font-size',10);
     svg.append('polygon').attr("points", "89,28 84,24 84,32").style('stroke','black');
     svg.append('line').attr('x1', 89).attr('y1',28).attr('x2',65).attr('y2',28).style('stroke', 'black');
     svg.append('text').attr('x',10).attr('y',66).text('Memory Add').attr('font-size',10);
     svg.append('polygon').attr("points", "89,64 84,60 84,68").style('stroke','black');
     svg.append('line').attr('x1', 89).attr('y1',64).attr('x2',65).attr('y2',64).style('stroke', 'black');
    for(var i = 0; i < 10; i++){
        svg.append('rect').attr('width',10).attr('height',30).attr('fill','white').attr('x',i*30+90).attr('y',30).attr('stroke','white').attr('class','arraybox').attr('id','arr-rect' + i);
        svg.append('text').attr('x',92 + (i * 30)).attr('y',47).attr('font-size',15).attr('class','arraytxt').attr('id','txt' + i);
        svg.append('text').attr('x',92 + (i * 30)).attr('y',28).attr('font-size',15).attr('id','txtindex' + i).text(i);
        svg.append('text').attr('x',92 + (i * 30)).attr('y',72).attr('font-size',15).attr('id','txtmem' + i).text((100 + i * 4).toString());
     }
       arrayrect = d3.selectAll('.arraybox');
       arraytxt = d3.selectAll('.arraytxt');
      arrayrect.transition().duration(2000).attr('stroke','black').attr('width',30).ease(d3.easeCubicOut);
      arraytxt.transition().duration(4000).text('100');
      console.log(arrayrect);
      console.log(arraytxt);
      btncreatearray.style.display = 'none';
      arrayspace.style.display = 'block';
 }


//Function to enter the elements in the array.
 function enterdatainarray(){
     let index = indexinput.value;
     let data = datainput.value;
     const curtxtfield = d3.select('#txt' + index);
     const array_rect = d3.select('#arr-rect' + index);
     array_rect.transition().duration(2000).attr('stroke','red').attr('stroke-width',3);
     console.log(curtxtfield);
     curtxtfield.transition().duration(2000).text(data);
     indexinput.value = "";
     datainput.value = "";
 }

// Function to get the data from the the array.
 function getdatafromarray(){
     let indexget = getindexfield.value;
     const gettxtfield = d3.select('#txt' + indexget);
     let datafound = gettxtfield.node().textContent;
     let resultmsg = "The Data found at index " + indexget + " is " + datafound;
     resultfetch.innerText = resultmsg;
     resultfetch.style.display = "block";
     indexget.value = "";
 }

 /* ----------------
 Remaining features
 1 Write the description about the arrys.
 2. Check the index value is valid or not
 3. check the index value is within the range.
 3. Display the warning if the index is not correct.
 
 */

 