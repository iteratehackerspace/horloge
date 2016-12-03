#!/usr/bin/env node

/**
 * Module dependencies
 */
const horloge = require('commander');

/**
 * Methods
 */
 var oneMinute = 60;

const runInterval = function (duration, interval = 1) {
  let secondsOnly = (duration % oneMinute);
  if (duration <= 0){
        console.log('Time is up');
    return 0;
  }else if(duration % oneMinute === 0){
  if(duration / oneMinute <= 5){
  if(duration / oneMinute > 0){
    console.log(`${duration / oneMinute} min`);
    }
  }
  }else  if(duration === oneMinute + (oneMinute / 2)){
        console.log(`${(duration - secondsOnly) / oneMinute} min ${secondsOnly} sec`);
  }else if(duration === (oneMinute / 2))
      console.log(`${duration} sec`);
  else if(duration === (oneMinute / 3))
      console.log(`${duration} sec`);
  else if(duration <= (oneMinute / 6)){
    console.log(`${duration} sec`);
  }
   // calls runInterval after interval is elapsed with the updated parameters
    setTimeout(runInterval, interval, duration - 1, interval);
  };

/**
 * Interface
 */
const controls = {
  start(duration) {
    console.log('Timer just started');
    runInterval(duration * oneMinute);
  },
};

horloge
  .command('start <duration>')
  .description('starts the horloge timer with a duration in minutes.')
  .action(controls.start);

horloge.parse(process.argv);
