import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';

import template from './listaUsuarios.html';

class ListaUsuarios {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      listaUsuarios() {
        return Meteor.users.find({});
      }
    });
  }
}

const name = 'listaUsuarios';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: ListaUsuarios
});