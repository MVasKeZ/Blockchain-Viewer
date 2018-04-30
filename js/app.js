'use strict';

angular.module('myApp', [])
  .controller('BlockchainViewer', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103";

    function fetch(){
      $http.get("https://cors.io/?https://blockchain.info/rawblock/" + $scope.search)
      .then(function(response){ $scope.singleBlock = response.data; });

      $http.get("https://cors.io/?https://blockchain.info/rawtx/" + $scope.search)
      .then(function(response){ $scope.singleTrans = response.data; });

      $http.get("https://cors.io/?https://blockchain.info/latestblock")
      .then(function(response){ $scope.latestBlock = response.data; });

    }

    $scope.update = function(blockinfo){
      $scope.search = blockinfo.hash;
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    }
  });
