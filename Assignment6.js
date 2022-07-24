
var number =  document.getElementById('number');
var text = document.getElementsByTagName('input');
console.log(number,text);

number.addEventListener('click', function(){

  window.alert("The square root of the inserte number is "+Math.sqrt(text[0].value))
})