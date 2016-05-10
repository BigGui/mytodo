'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
	
	// Item au chargement
	$scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Roger', 'Roger 2'];

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
