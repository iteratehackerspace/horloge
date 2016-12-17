#!/usr/bin/env node

/**
 * Module dependencies
 */
const horloge = require('commander');
const chalk = require('chalk');
const logic = require('./logic.js');

horloge
  .command('start [duration]')
  .description('starts the horloge timer with a duration in minutes.')
  .action(logic.start);

horloge.parse(process.argv);
