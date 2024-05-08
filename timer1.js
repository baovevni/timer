const { exec } = require('child_process');
const providedNumbers = process.argv.slice(2); 

  for (const timeString of providedNumbers) {
    const time = parseInt(timeString);
    if (isNaN(time) || time < 0) {
      console.log("Incorrect Input");
      process.exit(1);
    } else {
      setTimeout(() => {
        console.log(`${time} seconds`);
        exec('osascript -e "beep"');
      }, (time * 1000));
    }
  };

  // Please be advised that this {{exec('osascript -e "beep"');}} works on MAC