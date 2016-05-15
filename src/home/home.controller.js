import Firebase from 'firebase';

angular.module('superLiveChat')
.controller('homeController', function($scope, $firebaseObject, $firebaseArray) {
  const myFirebaseRef = new Firebase(FIREBASE_URL);
  $scope.messages = $firebaseArray(myFirebaseRef);
  $scope.message = '';
  $scope.submit = function() {
    if (!$scope.message.length) {
      return false;
    }
    $scope.messages.$add({
      message: $scope.message,
      timestamp: Date.now()
    });
    $scope.message = '';
  }
});
