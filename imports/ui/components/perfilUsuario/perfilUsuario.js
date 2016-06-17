import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './perfilUsuario.html';

class perfilUsuario {
  constructor($stateParams) {
    'ngInject';

   this.userId = $stateParams.userId;
  }
}

const name = 'perfilUsuario';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: perfilUsuario
});