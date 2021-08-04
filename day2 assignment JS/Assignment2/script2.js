
console.log(`The numbers between 1 and 50 that are divisible by 5 are: `);
for(i=1;i<=50;i++){
    x=i%5;
    if(x==0){
        console.log(i);
    }
}