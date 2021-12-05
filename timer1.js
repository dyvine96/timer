// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

// the timer should loop through the command line arg(s) and return a system sound after the set number (seconds)

//
'use strict';

const beepAfterTimeOuts = function(timeOutsArray){
  for (const timeOut of timeOutsArray){
   setTimeout(() => {
     process.stdout.write('\x07');
   }, timeOut * 1000);
  }
 };

const timeOutsArray = process.argv.slice(2)
beepAfterTimeOuts(timeOutsArray);


// for (const number of process.argv.slice(2)) {
//   setTimeout(() => {
//     process.stdout.write('BEEP');
//   }, number * 1000);
// };



