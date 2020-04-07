import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-mu12-f32-l');
  this.route('i-i-s-mu12-f32-e',
  { path: 'i-i-s-mu12-f32-e/:id' });
  this.route('i-i-s-mu12-f32-e.new',
  { path: 'i-i-s-mu12-f32-e/new' });
});

export default Router;
