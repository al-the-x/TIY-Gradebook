(function(window) {
  // With jQuery.load...
  // $('main.container').load('views/repositories.html');

  var app = angular.module('tiy-gradebook', [ ]);

  app.controller('MainController', function($http){
    this.page = function(name){
      this.view = 'views/404.html';

      if ( name == 'milestones' ){
        this.view = 'views/milestones.html';
      }
      if ( name == 'repositories' ){
        this.view = 'views/repositories.html';
      }
    }

    this.page('repositories');

    this.repos = [
      { name: 'NAME OF REPO',
        created_by: {
          name: 'YOUR NAME HERE',
          login: 'LOGIN'
        }
      },
      { name: 'NAME OF REPO',
        created_by: {
          name: 'YOUR NAME HERE',
          login: 'LOGIN'
        }
      },
      { name: 'NAME OF REPO',
        created_by: {
          name: 'YOUR NAME HERE',
          login: 'LOGIN'
        }
      }
    ]

    // $.getJSON('/api/github/orgs/TheIronYard--Orlando/repos.json');
    $http.get('/api/github/orgs/TheIronYard--Orlando/repos.json')
      .then(function(response){
        console.log(response);
      }, function(){
        console.log('WHY IS THIS HAPPENING!?');
      })
  }); // END controller(MainController)
})(window);
