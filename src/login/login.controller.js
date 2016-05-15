import Firebase from 'firebase';
angular.module('superLiveChat')
.controller('loginController', function($scope, $state, User) {
  const myFirebaseRef = new Firebase(FIREBASE_URL);

  $scope.submit = function() {
    myFirebaseRef.createUser({
      email: $scope.user.email,
      password: $scope.user.password
    }, function(error, userData) {
      if (error) {
        handleError(error);
      } else {
        successCallback(userData);
      }
    });
  }

  $scope.login = function() {
    myFirebaseRef.authWithPassword({
      email: $scope.user.email,
      password: $scope.user.password
    }, function(error, authData) {
      if (error) {
        alert(error);
      } else {
        User.setUser(authData);
        $state.go('home');
      }
    });
  }

  function handleError(error) {
    alert(error);
  }

  function successCallback(authData) {
    $state.go('home');
  }
});
