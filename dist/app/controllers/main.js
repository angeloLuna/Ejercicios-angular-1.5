(function(){
    'use strict'

    angular.
        module("practica")
        .controller('jelpMi', function($scope){

            $scope.orden = {cantidad:3};
            // Cuando el formulario es valido se ejecuta la función
            $scope.ordenarServicio = function(){
                if($scope.formulario.$valid){
                    $scope.servicioOK = true;
                }
            }

        })
})();