(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.templates.html'
  })

  // Premade list page
   .state('mainCateg', {
      url: '/main-categ',
      templateUrl: 'src/templates/main-categories.template.html',
      controller: 'MainCategController as mainCateg',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('itemDetail', {
      url: '/item-detail/{itemShortName}',
      templateUrl: 'src/templates/main-items.templates.html',
      controller: "ItemDetailController as itemDetail",
      resolve: {
        items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
        //  console.log(itemShortName);
          return MenuDataService.getItemsForCategory($stateParams.itemShortName);
        }]
      }
    });

}

})();
