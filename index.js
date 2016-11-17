angular.module('myStickyApp', [])
	.controller('stickyCtrl', ['$scope', function myController($scope) {
		$scope.stickies = [
			{
				title: 'title1',
				text: 'learn angularJS'

			},

			{
				title: 'title2',
				text: 'build an app'
			}				
		];

		$scope.getTotalStickies = function() {
			return $scope.stickies.length;
		};

		$scope.addSticky = function() {
			$scope.stickies.push({
				title: $scope.formStickyTitle,
				text: $scope.formStickyText
			});
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