import Firebase from 'firebase';
angular.module('superLiveChat')
.controller('loginController', function($scope) {
  const myFirebaseRef = new Firebase(FIREBASE_URL);
  $scope.submit = function() {
    myFirebaseRef.createUser({
      email: $scope.user.email,
      password: $scope.user.password
    }, function(error, userData) {
      console.log(error);
      console.log(userData);
    });
  }
});
