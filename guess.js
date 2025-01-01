let mi=1;
let ma=100;
let c=0;
guess=false;
var y=Math.floor(Math.random()*ma+1);
while(!guess){ 
  c=c+1;
  let r=window.prompt("enter your guess?");
  if(r==y){
  guess=true;
  alert("match found "+r+"\n"+c+" attempts");
  }
  else if(r<y){
    alert("your number is small");
  }
  else{
    alert('your number is big');
  }

}
