angular.module("app", ["ngRoute", "ui.bootstrap"])
.config(["$routeProvider", function($routeProvider) {
	$routeProvider
		.when("/login", {
			controller: "LoginController",
			templateUrl: "components/auth/login.html",
			title: "ログイン",
			menuType: "login"
		})
		.when("/simple-crud", {
			templateUrl: "components/simple-crud/customerList.html",
			title: "シンプルCRUD",
			menuType: "simple-crud"
		})
		.otherwise({
			redirectTo: "/simple-crud"
		});
}])
.run(["$rootScope", "$location", "$route", "AppPot", function($rootScope, $location, $route, AppPot) {

	$rootScope.$on("$routeChangeStart", function(event, next, current) {
		if (next.controller == "LoginController") {
			if (AppPot.getAuthInfo().isLogined()) {
				$location.path("/");
				$route.reload();
			}
		}
		else {
			if (!AppPot.getAuthInfo().isLogined()) {
				$location.path("/login");
				$route.reload();
			}
		}
	});

	$rootScope.$on("$routeChangeSuccess", function(event, next, current) {
		$rootScope.title = next.title;
		$rootScope.menuType = next.menuType;
	});

}]);


