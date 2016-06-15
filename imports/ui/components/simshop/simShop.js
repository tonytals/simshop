//import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './simShop.html';

class Simshop {};

const name = 'simshop';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: Simshop
});
