"use strict"

function pr() {
    let proizvedeniye=1;
    for (let i=10;i<100;i++) {
        if (i%2!=0 && i%13==0) {
            console.log(i);
            proizvedeniye=proizvedeniye*i;
        }
    }
    console.log(proizvedeniye);
}
pr()