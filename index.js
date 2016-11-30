#!/usr/bin/env node

/**
 * Module dependencies
 */

const horloge = require('commander');

const timer = (duration) => {
  const interval = setInterval(() => {
    if (duration === 0) {
      console.log("Time's up");
      clearInterval(interval);
    } else {
      console.log(`${duration} minutes left`);
      duration -= 1;
    }
  }, 60 * 1000);
};

horloge
  .command('start <duration>')
  .description('start the Horloge timer.')
  .action(timer);

horloge.parse(process.argv);
