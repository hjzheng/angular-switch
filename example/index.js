(function() {
	angular.module('app', ['uiSwitch']);
	angular.module('app').controller('MainController', function ($scope) {
		$scope.test1 = true;
		$scope.test2 = false;
		$scope.test3 = '亮';
		$scope.test4 = 'off';
		$scope.test5 = true;
		$scope.test6 = {
			switch: true
		};
		$scope.state = false;
		$scope.change = function (value) {
			console.log('触发change函数: ', value);
		};
	});
}());