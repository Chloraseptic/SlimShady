"use strict"


function f1() {
    for (let i=10;i<100;i++) {
        if(i%4==0 && i%6!=0) {
            console.log(i);
        } 
    }
}
f1();