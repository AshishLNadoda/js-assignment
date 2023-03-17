
let num =5; 
function divbytwo(num){
    return num/2;}
console.log(divbytwo(num));
function mulbytwo(num){
    return num*2;}
console.log(mulbytwo(num));

for(var i = 1; i <= num; i++)
  {
      if(isPrime(i)) {
        console.log( i );
      }
}
function isPrime(num){
      if(num == 1 || num == 0) return false;
   
      for(var i = 2; i < num; i++)
      {
        if(num % i == 0) return false;
      }
      return true;
}