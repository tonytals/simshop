import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Mongo } from 'meteor/mongo';

import { name as simShop } from '../imports/ui/components/simshop/simShop';

export const nomeDoSistema = "Sim Shop v0.1"; //O nome aqui colocado será replicado em todo o sistema


document.title = nomeDoSistema;
export const Produto = new Mongo.Collection('produtos');