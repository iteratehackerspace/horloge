module.export = {

  /**
  * Methods
  */
  // Converts a duration from minutes to seconds
  toSeconds (minutes) {minutes * 60},
  // Return an array with the number of minutes and remaining seconds
  toMnSec (sec) {[Math.floor(sec / 60), sec % 60]},

  // Rewrites the last output line with updated content
  flushLine: (data) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(data);
  },

  // Determines the duration of the current timer tick
  setTick: (duration, ref = 60) =>
    ((duration > (2 * ref) && ref)         // duration > 2mn  -> 60
    || (duration > (ref / 2) && (ref / 2)) // duration > 30s  -> 30
    || (duration > (ref / 6) && (ref / 6)) // duration > 10s  -> 10
    || 1),                                 // duration <= 10s -> 1

  // Renders proper output to the console
  renderTimeLeft: (duration) => {
    let content = '';
    if (duration === 0) content = "\nTime's up!\n";
    else {
      const [minutes, rem] = toMnSec(duration);

      // Construt the output
      if (minutes > 0) content = `${minutes}mn `;
      if (rem !== 0) content += `${rem}s `;
      content += 'left.';
    }

    // Render the updated content to the output
    flushLine(content);
  },

  // Runs a full timer loop
  runInterval: (duration,
                interval = 1000) => {
    renderTimeLeft(duration);
    const tick = setTick(duration);
    const newDuration = duration - tick;
    const delay = tick * interval;

    // calls runInterval after interval is elapsed with the updated parameters
    if (duration !== 0) setTimeout(runInterval, delay, newDuration, interval);
  },

  /**
   * Interface
   */
    start: (duration = 25) => {
      if (duration === '' || (duration % 1) !== 0) {
        console.log(chalk.red.bold('<<<Please provide an integer value (ex. -> 5, 10, 12)>>>'));
        return;
      }
      // Run the interval transforming user-set duration (in minutes) to seconds
      runInterval(toSeconds(duration));
    },

  /**
  * Main
  */
  // The time base unit is the second (1000ms)

}
