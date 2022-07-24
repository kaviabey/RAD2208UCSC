let val = document.getElementById('number');
let desc =  document.getElementById('msg');
val.addEventListener("mouseout",function(){
    console.log("eLS EL");
    desc.innerHTML = "20% of value: "+val.value*0.2+"<br>Total: "+val.value+"+"+Math.round(val.value*0.2)+"="+Math.round(val.value*1.2);



});