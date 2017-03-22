function HeaderController($scope, $location, Global) {
	$scope.global = Global;
	$scope.menu = [
		{
			"title": "Person",
			"link": "person"
		},
		{
			"title": "Insights",
			"link": "insights"
		}
	];

	$scope.init = function() {

	};
}