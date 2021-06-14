const arraydiv = document.getElementById('array');
const stackdiv = document.getElementById('stack');
const queuediv = document.getElementById('queue');
const linkeddiv = document.getElementById('Linked_list');
 var activediv = arraydiv;
 stackdiv.style.display = 'none';
 queuediv.style.display = 'none';
 linkeddiv.style.display = 'none';
 const arrayviewbtn = document.getElementById('arrayviewbtn');
 const stackviewbtn = document.getElementById('stackviewbtn');
 const queueviewbtn = document.getElementById('queueviewbtn');
 const linkedviewbtn = document.getElementById('linkedviewbtn');

 arrayviewbtn.onclick = () => {
     changeActivediv(arraydiv);
 }
 stackviewbtn.onclick =  () => {
     changeActivediv(stackdiv);
 }
 queueviewbtn.onclick = () => {
     changeActivediv(queuediv);
 }
 linkedviewbtn.onclick = ()=>{
     changeActivediv(linkeddiv);
 }

function changeActivediv(set_div_to_active_div){
    activediv.style.display = 'none';
    set_div_to_active_div.style.display = 'block';
    activediv = set_div_to_active_div;
}

function logs(){
    console.log('its working');
}

//console.log('its working');

