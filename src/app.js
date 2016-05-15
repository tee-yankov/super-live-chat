angular.module('superLiveChat', [
  'ui.router',
  'firebase',
  'ui.bootstrap'
])
.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
});
