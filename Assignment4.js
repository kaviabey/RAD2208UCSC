var names =  document.getElementsByTagName('input');
var click = document.getElementById('click-btn');
console.log(names,click);
click.addEventListener('click',Area );
var test =  document.getElementById('msg');
function Area(){

    test.innerText = "Area of the rectangle is "+names[0].value*names[1].value;


}

