angular.module('cep').factory('cepAPI', function($http, cepValue){
    
    var _getDadosCEP = function(numero){
        return $http.get(cepValue.baseUrl + numero + '/json/');
    };
    
    return{
        getDadosCEP : _getDadosCEP
    }
});