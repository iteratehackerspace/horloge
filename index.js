#!/usr/bin/env node

const horloge = require('commander');


 const funk = function(...arr){
   
   if(isNaN(arr[1])){
     arr[1]=0;
   }
   if(arr[1]===0 && arr[0]!==0){
         console.log(arr[0]+ "m left");
         arr[0]--;
         arr[1]=60;
   }
   if(arr[0]===0 && arr[1]<10){ 
     console.log(arr[1]);
   }
   
   if(arr[1]===0 && arr[0]===0){
     console.log("time is up");
    }
    else{
      
    setTimeout(funk, 1000, arr[0], arr[1]-1);
    } 
   };

horloge
  .command('start <d> <a>')
  .description('starts the horloge timer with a duration in minutes.')
  .action(funk);

horloge.parse(process.argv);
