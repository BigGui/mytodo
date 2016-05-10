'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
	
	// Récupère la list stockée en local
	var todosInStorage = localStorageService.get('todos');
	
	// Initialise avec le stockage ou à vide
	$scope.todos = todosInStore || [];
	
	// Watch les changements pour les stocker
	$scope.$watch('todos', function () {
		localStorageService.set('todos', $scope.todos);
	}, true);

	// Ajoute un item
	$scope.addTodo = function () {
		$scope.todos.push($scope.todo);
		$scope.todo = '';
	};

	// Retire un item
	$scope.removeTodo = function (index) {
		$scope.todos.splice(index, 1);
	};
  });
