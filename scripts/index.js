/* global $ noteful api store */
'use strict';

let API_ROOT;

const API_ROOT_ELEMENT_NAME = 'API_ROOT';

$(document).ready(function () {
  
  API_ROOT = $(`[name="${API_ROOT_ELEMENT_NAME}"]`)[0];
  noteful.bindEventListeners();

  noteful.render();

});

