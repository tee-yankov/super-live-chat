angular.module('superLiveChat')
.config(function($stateProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    template: require('./login.html'),
    controller: 'loginController'
  })
});

require('./login.controller.js');
