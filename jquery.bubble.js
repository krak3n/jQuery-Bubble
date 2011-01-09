/**
 * Bubble JQuery Plugin
 * Allows you to bubble up the DOM until you find a match to an expression, for example:
 * $('.submit').bubble('form');
 * This will bubble up the DOM until we find an element that matches the expression, if no
 * match is found by the time we reach the HTML elment, the script returns false
 *
 * Author: Chris Reeves <me@chris-reeves.com>
 */
jQuery.fn.extend({
  bubble: function(expr) {
    var match = false;
    var current_elmn = $(this);
    while(!match) {
      if(current_elmn.is('html')) {
        break;
      } else {
        if(current_elmn.parent().is(expr)) {
          match = true;
        } else {
          current_elmn = current_elmn.parent();
        }
      }
    }
    if(match) {
      return current_elmn.parent();
    } else {  
      return false;
    }
  }
});