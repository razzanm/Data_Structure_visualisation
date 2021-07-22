const arraydiv = document.getElementById('array');
const stackdiv = document.getElementById('stack');
const queuediv = document.getElementById('queue');
const linkeddiv = document.getElementById('Linked_list');
const binaryTreediv = document.getElementById('BinarySearchTree');
 var activediv = binaryTreediv;

 stackdiv.style.display = 'none';
 queuediv.style.display = 'none';
 arraydiv.style.display = 'none';
 linkeddiv.style.display = 'none';
 const arrayviewbtn = document.getElementById('arrayviewbtn');
 const stackviewbtn = document.getElementById('stackviewbtn');
 const queueviewbtn = document.getElementById('queueviewbtn');
 const linkedviewbtn = document.getElementById('linkedviewbtn');
 const binaryTreeViewbtn = document.getElementById('binaryTreeViewbtn');

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
 binaryTreeViewbtn.onclick = () => {
     changeActivediv(binaryTreediv);
 }

function changeActivediv(set_div_to_active_div){
    activediv.style.display = 'none';
    set_div_to_active_div.style.display = 'block';
    activediv = set_div_to_active_div;
}

function treeNodes(){
   let data;
   let left;
   let right;
}
const tempnode = new treeNodes();
tempnode.data = 54;
console.log(tempnode);
console.log(tempnode.data);
//console.log('its working');

