var app = angular.module("santa",['ngRoute', 'ngAnimate']);
var intervalo;

app.config(["$routeProvider",
function($routeProvider){
	$routeProvider
		.when("/inicio", {
			title:"inicio",
			templateUrl: "inicio.html",
            controller: "inicioCtrl"
		})
		.when("/reservaciones", {
			title:"reservaciones",
			templateUrl:"reservaciones.php",
            controller: "reservaCtrl"
		})
		.when("/", {
			title:"inicio",
			templateUrl: "inicio.html",
            controller: "inicioCtrl",
			role:'0'
		})
		.otherwise({
			redirectTo: "/inicio",
            controller: "inicioCtrl"
		});
}]);


app.run(function ($rootScope, $location, $interval) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        $interval.cancel(intervalo);
        $("ul.nav li").removeClass("active");
        var activo = $location.path();
        if((activo == "/inicio") || (activo == "/")){$(".nav li:nth-child(1)").addClass("active");}
        if(activo == "/reservaciones"){$(".nav li:nth-child(6)").addClass("active");}
    });
});


app.directive('script', function() {
    return {
      restrict: 'E',
      scope: false,
      link: function(scope, elem, attr) {
        if (attr.type === 'text/javascript-lazy') {
          var code = elem.text();
          var f = new Function(code);
          f();
        }
      }
    };
});