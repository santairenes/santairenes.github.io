app.controller('inicioCtrl', ['$location', '$rootScope', '$scope', '$interval',
    function($location, $rootScope, $scope, $interval) {
        slider1 = 1;
        $("#fechas").click(function(){
            $rootScope.finicial = $("#finicial").val();
            $rootScope.ffinal = $("#ffinal").val();
            $location.path("/reservaciones");
        });
        $scope.temporizador = function() {
            $("#slider1").css("background-image","url(imagenes/"+slider1+".jpg)");
            slider1++;
            if (slider1 > 8){slider1 = 1;}
        }
        $scope.temporizador();
        intervalo = $interval(function(){
            $scope.temporizador();
        }, 5000);
}]);


app.controller('reservaCtrl', ['$rootScope',
    function($rootScope) {
        $("#finicial2").val($rootScope.finicial);
        $("#ffinal2").val($rootScope.ffinal);
}]);