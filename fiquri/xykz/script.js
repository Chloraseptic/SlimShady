"use strict";

let x=+prompt("ot->");
let y=+prompt("do->");
let z=+prompt("ne vkl->");
let k=+prompt("ne vkl->");
let sum=0;

if(y<x){
     let x=+prompt("do->");
} else {
    if(y>x){
        for(let i=x;i<=y;i++){
            if(i==z || i==k){
                continue;
            }
            sum=sum+i;
        }
    }
}

console.log(sum);