for(let i = 0 ; i <= 25 ; i++){
    if(i%2 == 0){
console.log(i)
    }
}

let sum = 0;
for(let i =0 ; i <= 10; i++){
    sum += i^2;
}
console.log(sum)

for(let i = 0; i <= 20; i++){
    if(i%2 != 0){
        console.log(i);
    }
}

var num1 = 0, num2 = 1;
var Fibonacci = 0 , next;

for(let i = 0; i <= 10; i++){
    console.log(num1);
next = num1 + num2;
num1 = num2;
num2 = next;
    num2++;
}


for(let i =1; i < 4 ; i++){
    for( let j =1 ; j <=10 ; j++){
        console.log(`${i}x${j}=${i*j}`)
    }
}