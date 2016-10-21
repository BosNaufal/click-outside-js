/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Click Outside JS - Version@0.0.1
*
*/

(function () {

  function onClickOutside(el, cb) {

    // make a event handler for click event
    this.evt = function (e) {
      var itsChildren = el.contains(e.target);
      if(e.target != el && !itsChildren) {
        return cb ? cb() : null;
      }
    };

    // Attach Event Listener to body
    document.addEventListener('click', this.evt, false);

    return this;
  }


  // Remove Event Listener from body
  onClickOutside.prototype.remove = function () {
    document.removeEventListener('click', this.evt, false);
  };

  // Reinit Event Listener
  onClickOutside.prototype.reinit = function () {
    document.addEventListener('click', this.evt, false);
  };


  // refs: Webpack UMD
  if(typeof module === 'object' && typeof exports === 'object') {
    module.exports = onClickOutside;
  }
  else if(typeof define === 'function' && define.amd) {
    define([], onClickOutside);
  }
  else if(typeof exports === 'object') {
    exports['onClickOutside'] = onClickOutside;
  }
  else {
    window.onClickOutside = onClickOutside;
  }

})();
