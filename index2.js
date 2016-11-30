#!/usr/bin/env node

const horloge = require('commander');

const funk = function(c)
{
  if(c%60===0){ 
    if(c/60<=5 && c/60>0){
      console.log(~~(c/60)+"mn left")
    }
  }
  if(c===90){
      console.log("1mn 30s left");
  }
  if(c===30){
      console.log(c+"s left");
  }
  if(c===20){
      console.log(c+"s left");
  }
  
  if(c<=10){
        console.log(c);
  }
  if(c===0){ 
    console.log("Time's up!");
  }
  else{
    setTimeout(funk, 1000, c-1);
  }
};

horloge
  .command('start <d>')
  .description('starts the horloge timer with a duration in minutes.')
  .action(funk);

horloge.parse(process.argv);
