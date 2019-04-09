var app = angular.module('demo', ['ui.router']);


app.config(function($stateProvider) {
    var helloState = {
      name: 'hello',
      url: '/hello',
      templateUrl: 'templates/hello.html'
    }
  
    var aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    }
  
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  });

app.controller('helloCtrl', function($scope){
    $scope.varA = 'test controller';
    var a = "dddd";
    $scope.messages = '';
 
    $scope.submit = function(){
        if($scope.user === 'admin' && $scope.password === 'password'){
            $scope.messages = 'login success !';
        }else{
            $scope.messages = 'login fail !';
        }
    }
});
// app.controller('ctrl2', function(){});