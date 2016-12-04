#!/usr/bin/env node

/**
 * Module dependencies
 */
const horloge = require('commander');
const chalk = require('chalk');

/**
 * Methods
 */
const runInterval = function (duration, interval = process.env.HORLOGE_UNIT_VALUE) {
  if (duration === 0) {
    console.log("\nTime's up");
  } else {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${duration}mn left`);
    // calls runInterval after interval is elapsed with the updated parameters
    setTimeout(runInterval, interval, duration - 1, interval);
  }
};

/**
 * Interface
 */
const controls = {
  start(duration) {
    if (duration === undefined) {
      duration = 25;
    } else if (duration === '' || (duration % 1) !== 0) {
      console.log(chalk.red.bold('<<<Please provide an integer value (ex. -> 5, 10, 12)>>>'));
      return;
    }
    runInterval(duration);
  },
};

/**
 * Main
 */
process.env.HORLOGE_UNIT_VALUE = 1000;

horloge
  .command('start [duration]')
  .description('starts the horloge timer with a duration in minutes.')
  .action(controls.start);

horloge.parse(process.argv);
