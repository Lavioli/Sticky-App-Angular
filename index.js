// Initialize Firebase
var config = {
  apiKey: "AIzaSyBPKFraRS0wqYj9_Yp2b1sYMuapjJH98ew",
  authDomain: "mystickyapp.firebaseapp.com",
  databaseURL: "https://mystickyapp.firebaseio.com",
  storageBucket: "mystickyapp.appspot.com",
  messagingSenderId: "1037022995801"
};
firebase.initializeApp(config);

angular.module('myStickyApp', ['firebase']) 
	.controller('stickyCtrl', ['$scope', '$firebaseArray', function stickyCtrl($scope, $firebaseArray) {
		var database = firebase.database().ref("/stickies");

		$scope.stickies = $firebaseArray(database);

//ADD stickies
		$scope.addSticky = function() {
		    $scope.stickies.$add({
		    	title: $scope.formStickyTitle,
				text: $scope.formStickyText
		    });
		    
		    $scope.formStickyText = '';
			$scope.formStickyTitle = '';
		};

//DELETE stickies
		$scope.deleteSticky = function(sticky) {
			var index = $scope.stickies.indexOf(sticky);
			$scope.stickies.$remove(index).then(function(database) {
				database.key === index.$id;
			})
		}

		$scope.toggleEditMode = function() {
			$(event.target).closest('li').toggleClass('editing');
		}

		$scope.editOnEnter = function(sticky) {
			var index = $scope.stickies.indexOf(sticky);

			if(event.keyCode == 13 && sticky.text) {
				$scope.toggleEditMode();
			}

			$scope.stickies.$save(index).then(function(database) {
				database.key == $scope.stickies[index].$id;
			})
		}
	}]);