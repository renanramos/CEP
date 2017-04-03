angular.module('cep').controller('cepCtrl', function($scope, cepAPI){
    
    $scope.cep = [];
    $scope.isCep = false;
    $scope.isError = true;

    $scope.buscaDadosCep = function(){
        cepAPI.getDadosCEP($scope.cep.numero).then(function successCallback(response){
               $scope.cep = response.data;
               $scope.isCep = !$scope.isCep;
        }, function errorCallback(data){
            $scope.error = 'Ops, CEP que você procura não foi localizado... =/';
            $scope.isCep = !$scope.isCep;
        });
    };
});