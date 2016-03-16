angular.module('stephenBDay', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/invitation");

  $stateProvider
    .state('invitation', {
      url: '/invitation',
      templateUrl: 'tmpl/invitation.html',
      controller: 'invCtrl'
    })
    .state('info', {
      url: '/info',
      templateUrl: 'tmpl/info.html',
      controller: 'infoCtrl'
    });
});
