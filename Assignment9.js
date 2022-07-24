let subject = document.getElementById('subject');
let  Marks = document.getElementById('marks');
let result =  document.getElementById('results');

let msg = document.getElementById('msg');

result.addEventListener('click',function(){
if (Marks.value>35)
     msg.innerHTML = "<p>Great!.You  are good in</p> "+'<b>'+subject.value+'</b>';

else
     msg.innerHTML = "<p>Sorry. You have to work hard for "+'<b>'+subject.value+'</b>';


     

});
