'use strict';

angular.module('app').directive('menu',function(){
	return {
		restrict: 'E',
		templateUrl : 'menu.html?nocache='+ new Date().getTime(),
		scope: true
	};
});