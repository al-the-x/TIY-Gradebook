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

      self.repos = [];

      $http.get('/api/github/repos/repos.json')
        .then(function(response) {
          self.repos = response.data.filter(function(year) {
            return !(year.name.indexOf('2') === -1);
          });
        }, function() {

        });
    }); // End of ReposController

    app.controller('CohortController', function($http, $routeParams) {
        var mile = this;

        mile.milestones = []
        $http.get('/api/github/repos/TIY/summerFee/milestones.json')
          .then(function(response) {
            mile.milestones = response.data;
          })
      }); // End of MilestonesController





    })(window);
