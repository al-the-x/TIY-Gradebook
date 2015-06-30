(function(window) {
    //with query.load
    // $('main.container').load('views/repositories.html');

    var app = angular.module('tiy-gradebook', [ 'ngRoute' ]);

    app.config(function($routeProvider){
      console.log($routeProvider);

      $routeProvider.when('/cohorts/:cohort', {
        templateUrl: 'views/milestones.html',
        controller: 'CohortController',
        controllerAs: 'cohort'
      });

      $routeProvider.when('/cohorts/2015--SUMMER--FEE', {
        templateUrl: 'views/milestones.html',
        controller: 'CohortController',
        controllerAs: 'cohort'
      });

      $routeProvider.when('/cohorts', {
        templateUrl: 'views/repositories.html',
        controller: 'CampusController',
        controllerAs: 'campus'
      });

      $routeProvider.when('/404', {
        templateUrl: 'views/404.html'
      })

      $routeProvider.otherwise('/404');
    });

    app.controller('MainController', function() {

    }); // End of Main controller


    app.controller('CampusController', function($http) {
      var self = this;

      self.cohorts = [];

      $http.get('/api/github/repos/repos.json')
        .then(function(response) {
          self.cohorts = response.data.filter(function(year) {
            return year.name.match(/(FEE|iOS|ROR)/);
          });
        });
    }); // End of ReposController

    app.controller('CohortController', function($http, $routeParams) {
      var self = this;

      self.assignments = []

      //$http.get('/api/github/repos/TIY/summerFee/milestones.json')
      // $http.get('https://api.github.com/repos/TheIronYard--Orlando/FEE--2014--FALL/milestones?state=all')
      // $http.get('https://api.github.com/repos/TheIronYard--Orlando/FEE--2015--SPRING/milestones?state=all')
      // $http.get('https://api.github.com/repos/TheIronYard--Orlando/2015--SUMMER--FEE/milestones?state=all')
      // By our powers combined... REFACTOR!
      $http.get('https://api.github.com/repos/TheIronYard--Orlando/'+ $routeParams.cohort + '/milestones?state=all')
        .then(function(response) {
          self.assignments = response.data;
        })
    }); // End of MilestonesController
})(window);
