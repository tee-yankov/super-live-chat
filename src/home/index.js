angular.module('superLiveChat')
.config(function($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    template: require('./home.html')
  })
});

require('./home.controller.js');
