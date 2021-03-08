module.exports = function reverse (n) {
  let a =  n.toString();
  let arr = [];
if (n >= 0){
    for (let i = 0; i < a.length; i++) {
     arr[i] = a.charAt(i);
   }
     arr.reverse();
       return (Number(arr.join('')));
} else {
  n = n * (-1);
  a =  n.toString();
  for (let i = 0; i < a.length; i++) {
    arr[i] = a.charAt(i);
  }
    arr.reverse();
     return (Number(arr.join('')) );
}
}
  