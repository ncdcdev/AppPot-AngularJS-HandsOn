angular.module("app")
.controller("CustomerController", ["$scope", "Customer", "$modal", function($scope, Customer, $modal) {
	$scope.EditType = { Create : 0, Update : 1, Delete : 2 }
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
			alert(error);
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

	$scope.showDetailDialog = function(customer) {
		Customer.findById(customer.get("objectId"))
		.then(function(customer) {
			$scope.customer = customer;
			$scope.detailDialog = $modal.open({
				templateUrl: "components/simple-crud/customerDetail.html",
				backdrop: "static",
				scope: $scope
			});
			$scope.detailDialog.isNew = false;
			$scope.$apply();
		})
		.catch(function(error) {
			alert(error);
		});
	}
	
	$scope.closeDetailDialog = function(editType) {
		var promise;
		switch(editType) {
		case $scope.EditType.Create:
			promise = $scope.customer.insert();
			break;
		case $scope.EditType.Update:
			promise = $scope.customer.update();
			break;
		case $scope.EditType.Delete:
			promise = $scope.customer.remove();
			break;
		}
		
		promise.then(function() {
			$scope.detailDialog.close();
			$scope.detailDialog = null;
			$scope.customer = null;
		})
		.catch(function(error) {
			alert(error);
		});
	}
	
	$scope.dismissDetailDialog = function() {
		$scope.detailDialog.dismiss();
		$scope.detailDialog = null;
		$scope.customer = null;
	}
}]);