angular.module('superLiveChat')
.config(function($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    template: '<h1>Hi!</h1>'
  })
});
