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
	.controller('stickyCtrl', ['$scope', function stickyCtrl($scope) {

		var database = firebase.database();

		$scope.addSticky = function() {

			firebase.database().ref('/stickies').push({
				title: $scope.formStickyTitle,
				text: $scope.formStickyText
			})
			$scope.formStickyText = '';
			$scope.formStickyTitle = '';
		};

		$scope.deleteSticky = function(sticky) {
			var index = $scope.stickies.indexOf(sticky);
			$scope.stickies.splice(index, 1);
		}

		$scope.toggleEditMode = function() {
			$(event.target).closest('li').toggleClass('editing');
		}

		$scope.editOnEnter = function(sticky) {
			if(event.keyCode == 13 && sticky.text) {
				$scope.toggleEditMode();
			}
		}
	}])
	.controller('AppCtrl', function($firebaseObject){
	    var vm = this;
	    var ref = firebase.database().ref();
	    vm.data = $firebaseObject(ref);
	});		