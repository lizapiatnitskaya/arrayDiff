function arrayDiff(a, b) {
let c=[];
    for(let i=0;i<b.length;i++){
        for(let j=0; j<a.length;j++){
            if (a[j]!=b[i]){
               c.push(a[j]);
            }    
    }
    a = c;
    c = [];
  }
  return a;
}
  console.log(arrayDiff([1, 2, 3, 4], [1,2,3]));