let submito =  document.getElementById('submit-btn');
let inputs = document.getElementsByTagName('input');


submito.addEventListener('click',function(){
 
    for(var i = 0; i < inputs.length;i++)
    {
         if(!inputs[i].checked)
          inputs[i].disabled = true;
         
    }

});


