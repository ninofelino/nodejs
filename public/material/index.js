angular.module('demoApp', ['ngMaterial','ui.router','ngResource'])
.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('view1',{url:"view1",templateUrl:'view1.html'})
    .state('view2',{templateUrl:'/view2.tpl',controller: function($scope)
          {$scope.title='this template 2';}
    }) 
     .state('custumer',{templateUrl:'custumer.html',controller: function($scope,$http)
          {$scope.title='Custumer';
            $http.get("/pg/select * from c_bpartner")
            .then(function(response){ $scope.related = response.data; });
          }
    })
    .state('salesOrder',{templateUrl:'salesOrder.html',controller: function($scope,$http,$mdDialog)
          {
            var alert;
            $scope.showAlert = showAlert;
             function showAlert() {
                console.log('alert');
                 alert = $mdDialog.alert({
                 title: 'Attention',
                 textContent: 'This is an example of how easy dialogs can be!',
                 ok: 'Close'});
                 $mdDialog.show( alert ).finally(function() {alert = undefined;});
                // body...
              }
             
            $scope.title='Sales Order';
            $http.get("/pg/select * from c_order").then(function(response){ $scope.related = response.data;
            });

          }
    }) 
         
      
    })
.controller('AppCtrl',function($scope,$mdSidenav){
     $scope.toggleSidenav = function () {console.log('toggleSidenav');
    $mdSidenav('nav').toggle();
  };




    $scope.menus=[
    {"menu":"Bussines Partner","type":"toogle","url":"view1"},
    {"menu":"Customer","type":"link","url":"custumer"},
    {"menu":"Vendor","type":"link","url":"view1"},
    {"menu":"Employee","type":"link","url":"view1"},
    {"menu":"Product","type":"toogle","url":"view1"},
    {"menu":"By category","type":"link","url":"view1"},
    {"menu":"Document","type":"toogle","url":"view1"},
    {"menu":"Sales Order","type":"link","url":"salesOrder"},
    {"menu":"Shipment Custumer","type":"link","url":"view2"},
    {"menu":"Invoice","type":"link","url":"view2"},
    {"menu":"Payment","type":"link","url":"view2"}
    
    
     
    ];})


;
