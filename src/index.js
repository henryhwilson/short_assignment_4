import $ from 'jquery';
import './style.scss';

// Called every second. Determines if "second" is plural, then displays
// number of seconds while incrementing counter with "counter++"

let counter = 0;

setInterval(() => {
  const s = counter === 1 ? '' : 's';
  $('#main').html(`You've been on this page for ${counter++} second${s}.`);
}, 1000);
