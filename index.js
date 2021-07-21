// Your code here

function saturdayFun(s = 'roller-skate'){
       return `This Saturday, I want to ${s}!`   
}

function mondayWork(m = 'go to the office'){
    return `This Monday, I will ${m}.`
}

function wrapAdjective( n= '*' , ){
   return function ( emphatic ='a hard worker'){
       return `You are ${n}${emphatic}${n}!`

   } 
} 
saturdayFun();
mondayWork();
wrapAdjective('||')("dedicated programmer");
console.log(saturdayFun('bathe my dog'),mondayWork('work from home'));