(function(window){
  // with jQuery.load
  // $('main.container').load('views/repositories.html');

  var app = angular.module('tiy-gradebook', [ ]);

  app.controller('MainController', function(){
    this.view = 'views/repositories.html';
    this.page = function(name){
      this.view = 'view/404.html';
      if ( name == 'milestones' ){
        this.view = 'views/milestones.html';
      }
      if ( name == 'repositories' ){
        this.view = 'views/repositories.html';
      }
    };
  }); // END controller(MainController)

  app.controller('RepositoryController', function($http){
    var self = this;
    self.classRepos = [ ];

    $http.get('/api/github/repos.json')
      .then(function(tiyRepos){
        console.log(tiyRepos);
        self.classRepos = tiyRepos.data;
    });
  });

  var API_BASE_URL = '/api/github/repos/TheIronYard--Orlando/2015--SUMMER--FEE/';

  function apiUrl (path){
    if ( path[0] === '/' ){
      // chop '/' off the front one day
    }
    return API_BASE_URL + path;
  }

  app.controller('CohortController', function($http){
    var self = this;
    self.assignments = [ ];

    $http.get(apiUrl('milestones.json'))
      .then(function(response){
        self.assignments = response.data;

        // Refactor to a loop...
        // var milestone1 = response.data[0];
        // $http.get(apiUrl('milestone/' + milestone1.number + '/issues.json'));
        //
        // var milestone2 = response.data[1];
        // $http.get(apiUrl('milestone/' + milestone2.number + '/issues.json'));
        //
        // var milestone3 = response.data[2];
        // $http.get(apiUrl('milestone/' + milestone3.number + '/issues.json'));

        // Iterating over Array? Refactor to `Array.forEach`!
        // for ( var index = 0; index < response.data.length; index++ ){
        //   var milestone = response.data[index];
        //   $http.get(apiUrl('milestone/' + milestone.number + '/issues.json'));
        // }

        // function getDemIssuesYall (item, index, all){
        //   var milestone = response.data[index];
        //
        //   $http.get(apiUrl('milestone/' + milestone.number + '/issues.json'));
        // }
        // response.data.forEach(getDemIssuesYall);

        // But `Array.forEach` doesn't exist in every browser...
        // response.data.forEach(function(milestone /* item, index, all */){
        //   // var milestone = item; // all[index]; // response.data[index]
        //
        //   $http.get(apiUrl('milestone/' + milestone.number + '/issues.json'));
        // });

        // Lodash to the rescue!
        _.forEach(response.data, function(milestone){
          $http.get(apiUrl('milestones/' + milestone.number + '/issues.json'))
            .then(function(response){
              milestone.issues = response.data;
            });
        });
      });
  });

})(window);
