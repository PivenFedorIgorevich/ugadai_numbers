let number = Math.floor(10*Math.random()) * + 1;
console.log(number);
let count=2;
document.getElementById('check').onclick = function(){
let username = document.getElementById('mynum').value;
usernum = parseInt(username);
let out= document.getElementById('out');
  if(count>0) {
if (usernum==number){
out.innerHTML = 'Ура вы победили!!!';
}
else if (usernum> number){
  out.innerHTML='Перелет';
}
else if (usernum<number){
  out.innerHTML ='Недолет';
}

document.getElementById('count').innerHTML = 'Осталось попыток' + count;
count=count-1;
}
else {
  alert('Попытки закнчились, вы проиграли.Страница будетперезагружена');
  location.reload();
}
}