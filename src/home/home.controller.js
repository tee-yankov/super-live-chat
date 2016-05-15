import Firebase from 'firebase';

angular.module('superLiveChat')
.controller('homeController', function($scope, $firebaseObject, $firebaseArray, $state, User) {
  const myFirebaseRef = new Firebase(FIREBASE_URL);
  if (!User.getUser()) {
    $state.go('login');
  }
  $scope.messages = $firebaseArray(myFirebaseRef);
  $scope.message = '';
  $scope.submit = function() {
    if (!$scope.message.length) {
      return false;
    }
    $scope.messages.$add({
      message: $scope.message,
      timestamp: Date.now(),
      author: User.getUser().password.email,
      image: User.getUser().password.profileImageURL
    });
    $scope.message = '';
  }
});
