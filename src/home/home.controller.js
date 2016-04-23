import Firebase from 'firebase';

angular.module('superLiveChat')
.controller('homeController', function($scope) {
  const myFirebaseRef = new Firebase(FIREBASE_URL);
  myFirebaseRef.set({
    message: 'Hello World'
  });
  myFirebaseRef.on('value', function(snapshot) {
    console.log(snapshot.val());
  });
});
