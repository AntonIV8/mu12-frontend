import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('f32E', 'i-i-s-mu12-f32', {
    
  });

  modelClass.defineProjection('f32L', 'i-i-s-mu12-f32', {
    
  });
};
