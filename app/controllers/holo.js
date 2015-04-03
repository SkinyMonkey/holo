import Ember from 'ember';

var SECONDS = 1000;
var totalGifNbr = 16;

export default Ember.Controller.extend({
  init: function () {
    this.currentGif = '0.gif';
    this.nextGif(1);
  },

  nextGif: function (gifNbr) {
    var that = this;

    Ember.run.later(function () {
      that.set('currentGif', gifNbr.toString() + '.gif');
      that.nextGif((gifNbr + 1) % totalGifNbr);
    }, 10 * SECONDS);
  }
});
