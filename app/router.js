import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('holo', {path: '/'});
  this.route('mobile', {path: '/mobile'});
});

export default Router;
