import Firebase from 'firebase';

angular.module('superLiveChat')
.controller('homeController', function($scope, $firebaseObject, $firebaseArray) {
  const myFirebaseRef = new Firebase(FIREBASE_URL);
  $scope.messages = $firebaseArray(myFirebaseRef);
  $scope.submit = function() {
    $scope.messages.$add({
      message: $scope.message
    });
  }
});
