import Firebase from 'firebase';

angular.module('superLiveChat')
.controller('homeController', function($scope) {
  const myFirebaseRef = new Firebase(FIREBASE_URL);
  $scope.messages = [];
  $scope.submit = function() {
    console.log($scope.message);
    myFirebaseRef.push({
      message: $scope.message
    });
  }
  myFirebaseRef.on('child_added', function(snapshot) {
    console.log(snapshot.val());
    if (!$scope.$$phase) {
      $scope.$apply(function() {
        $scope.messages.push(snapshot.val());
      });
    }
  });
});
