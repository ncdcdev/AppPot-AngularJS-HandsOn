angular.module("app")
.factory("Customer", ["AppPot", function(AppPot) {
	var customer = AppPot.defineModel("customer", {
		"customerId": {
    		type: AppPot.DataType.Varchar
		},
		"name": {
    		type: AppPot.DataType.Varchar
		},
		"zip": {
    		type: AppPot.DataType.Varchar
		},
		"address": {
    		type: AppPot.DataType.Varchar
		},
		"phone": {
    		type: AppPot.DataType.Varchar
		},
		"sex": {
    		type: AppPot.DataType.Long
		}
	});

	return customer;
}]);