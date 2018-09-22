var app = angular.module('ejemplo2',[]);

app.controller('controllerMain', function ($scope, $http) {

	$scope.incializar = function(){
		$scope.paises = [];
	}

	$scope.buscarRegiones = function () {
		$scope.paises = [];
		$http.get($scope.url)
			.success(function(result){
			$scope.paises = result;
		})
	}

	
});