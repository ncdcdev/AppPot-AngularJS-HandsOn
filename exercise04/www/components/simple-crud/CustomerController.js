angular.module("app")
.controller("CustomerController", ["$scope", "Customer", "$modal", function($scope, Customer, $modal) {
	$scope.condition = {}
	$scope.detailDialog = null;
	
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
			alert(error.description);
		});
	}

	$scope.showNewDialog = function() {
		$scope.customer = new Customer();
		$scope.detailDialog = $modal.open({
	        templateUrl: "components/simple-crud/customerDetail.html",
	        backdrop: "static",
	        scope: $scope
	    });
		$scope.detailDialog.isNew = true;
	}

	$scope.closeDetailDialog = function() {	
		$scope.customer.insert()
		.then(function() {
			$scope.detailDialog.close();
			$scope.detailDialog = null;
			$scope.customer = null;
		})
		.catch(function(error) {
			alert(error.description);
		});
	}
	
	$scope.dismissDetailDialog = function() {
		$scope.detailDialog.dismiss();
		$scope.detailDialog = null;
		$scope.customer = null;
	}
}]);