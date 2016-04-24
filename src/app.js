angular.module('superLiveChat', [
  'ui.router',
  'firebase'
])
.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
});
