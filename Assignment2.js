
const d  = new Date();



let text = document.getElementById("text");

let times = document.getElementById("timex");
times.addEventListener("click",function(){
if(d.getHours() > 12){
text.textContent = "Now the time is "+d.getHours()+"."+d.getMinutes()+"p.m";
}

else{
    text.textContent = "Now the time is "+d.getHours()+"."+d.getMinutes()+"a.m";

}

times.textContent = "Remaining "+(24-d.getHours()+" hours more...");



});




