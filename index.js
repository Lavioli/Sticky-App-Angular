angular.module('myStickyApp', [])
	.controller('stickyCtrl', ['$scope', function myController($scope) {
		$scope.stickies = [
			{
				text: 'learn angularJS'
			},

			{
				text: 'build an app'
			}				
		];

		$scope.getTotalStickies = function() {
			return $scope.stickies.length;
		};

		$scope.addSticky = function() {
			$scope.stickies.push({
				text: $scope.formStickyText
			});

			$scope.formStickyText = '';
		};

		$scope.deleteSticky = function(sticky) {
			var index = $scope.stickies.indexOf(sticky);
			$scope.stickies.splice(index, 1);
		}
	}])			