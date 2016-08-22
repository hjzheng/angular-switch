/**
 * Created by hjzheng on 16/6/16.
 */
(function() {
	angular.module('uiSwitch', []).directive('uiSwitch', function() {
		return {
			restrict: 'E',
			templateUrl: 'switch.html',
			replace: true,
			scope: {
				size: '@',
				color: '@',
				on: '@',
				off: '@',
				trueValue: '<',
				falseValue: '<',
				disabled: '@',
				ngModel: '=',
				onChange: '&'
			},
			require: {
				ngModelCtrl: 'ngModel'
			},
			bindToController: true,
			controller: ['$scope', function($scope) {
				var vm = this;
				vm.size = vm.size || 'default';
				vm.color = vm.color || 'green';

				// UI - model
				vm.check = function() {
					if (vm.disabled) {
						return;
					}

					var isActive = vm.ngModel === (vm.trueValue || true);
					var viewValue = !isActive ? vm.trueValue || true : vm.falseValue || false;

					vm.ngModelCtrl.$setViewValue(viewValue);
					vm.ngModelCtrl.$render();
				};

				$scope.$watch('vm.ngModel', function(newValue) {
					if(vm.onChange) {
						vm.onChange({value: newValue});
					}
				});
			}],
			controllerAs: 'vm'
		};
	});
}());

angular.module("uiSwitch").run(["$templateCache", function($templateCache) {$templateCache.put("switch.html","<span class=\"switch switch-{{vm.size}} {{vm.color}}\" ng-click=\"vm.check()\" ng-class=\"{\'check\': vm.ngModel === (vm.trueValue || true)}\">\n    <small></small>\n    <span class=\"switch-text\"><span class=\"on\">{{vm.on}}</span><span class=\"off\">{{vm.off}}</span></span>\n</span>\n\n");}]);