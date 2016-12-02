#!/usr/bin/env node

/**
 * Module dependencies
 */
const horloge = require('commander');

/**
 * Methods
 */

const runInterval = function (duration, interval = 1000) {
  if (duration <= 0){
        console.log('Time is up');
    return 0;
  }else if(duration % 60 === 0 && (duration / 60 <= 5 && duration / 60 > 0)){
    console.log(`${duration / 60} min`);
  }else  if(duration === 90){
    console.log(`${(duration - (duration % 60)) / 60} min ${duration % 60} sec`);
  }else if(duration === 30 || duration === 20 || duration <= 10){
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
    runInterval(duration * 60);
  },
};

horloge
  .command('start <duration>')
  .description('starts the horloge timer with a duration in minutes.')
  .action(controls.start);

horloge.parse(process.argv);
