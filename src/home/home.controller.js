import Firebase from 'firebase';

angular.module('superLiveChat')
.controller('homeController', function($scope) {
  const myFirebaseRef = new Firebase(FIREBASE_URL);
  $scope.messages = [];
  myFirebaseRef.set({
    message: 'Hello World'
  });
  myFirebaseRef.on('value', function(snapshot) {
    console.log(snapshot.val());
    $scope.messages.push(snapshot.val());
  });
});
