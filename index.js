#!/usr/bin/env node

const horloge = require('commander');


const hashvark = function(d){
  if(d%60===0){ 
    if(d/60<=5 && d/60>0){
      console.log(~~(d/60)+"mn left");
    }
  }
  if(d===90){
      console.log("1mn 30s left");
  }
  if(d===30 || d===20){
      console.log(d+"s left");
  }
  if(d<=10){
        console.log(d);
  }
  if(d===0) {
    console.log("Time's up!");
    clearInterval(a);
  }
};
const funk= function(c){
  if(c===undefined){
    c=25;
  }
  c=fun(c);
  const a= setInterval(function(){
    if(c>=0) {hashvark(c--)}},1000);
};
const fun= function(p){
  return p*60;
};

horloge
  .command('start <d>')
  .description('starts the horloge timer with a duration in minutes.')
  .action(funk);

horloge.parse(process.argv);
