angular.module("app")
.controller("CustomerController", ["$scope", "Customer", function($scope, Customer) {
	$scope.condition = {}
	
	$scope.findList = function() {
		let customerId = nullToBlank($scope.condition.customerId);
		let name = nullToBlank($scope.condition.name);
		Customer.select()
			.where("#customer.customerId like ? AND #customer.name like ?", "%" + customerId + "%", "%" + name + "%")
			.findList()
		.then(function(result) {
			$scope.customers = result.customer;
			$scope.$apply();
		})
		.catch(function(error) {
			alert(error);
		});
	}
}]);