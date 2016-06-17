//import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor'

import template from './simShop.html';
import { name as ListaUsuarios } from '../listaUsuarios/listaUsuarios';

class Simshop {};

const name = 'simshop';

// create a module
export default angular.module(name, [
  angularMeteor,
  'accounts.ui',
  ListaUsuarios
]).component(name, {
  template,
  controllerAs: name,
  controller: Simshop
});