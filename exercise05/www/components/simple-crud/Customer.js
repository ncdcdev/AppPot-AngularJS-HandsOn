angular.module("app")
.factory("Customer", ["AppPot", function(AppPot) {
	var customer = AppPot.defineModel("customer", {
		"customerId": {
    		type: AppPot.Type.Varchar
		},
		"name": {
    		type: AppPot.Type.Varchar
		},
		"zip": {
    		type: AppPot.Type.Varchar
		},
		"address": {
    		type: AppPot.Type.Varchar
		},
		"phone": {
    		type: AppPot.Type.Varchar
		},
		"sex": {
    		type: AppPot.Type.Long
		}
	});

	return customer;
}]);