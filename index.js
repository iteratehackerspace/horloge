#!/usr/bin/env node

/**
 * Module dependencies
 */
const horloge = require('commander');

const timer = i => {
  if (i === 0){
    console.log("That's it");
    return 0;
  }else if(i % 60 === 0){
    if(i / 60 <= 5 && i / 60 > 0){
    console.log((i / 60) + " min");
  }
}else  if(i === 90){
    console.log(((i - (i % 60)) / 60) + " min " + (i % 60) + " sec");
  }else if(i === 30 || i === 20 || i <= 10){
    console.log(i + " sec");
  }
    setTimeout(timer, 1000 ,i - 1);
}

const startTimer = opts => {
  console.log("The Timer Just Started")
  timer(opts * 60);
};

horloge
  .command('start <t>')
  .description('start the Horloge timer.')
  .action(startTimer);

horloge.parse(process.argv);
