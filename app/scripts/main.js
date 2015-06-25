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

    this.repos = [ ];

    var self = this, // Keep a reference to `this` for later...
        that = this, // PLEASE DON'T DO THIS... I MEAN THAT... YOU KNOW!
        app = this; // Just a convenience...

    // $.getJSON('/api/github/orgs/TheIronYard--Orlando/repos.json');
    $http.get('/api/github/orgs/TheIronYard--Orlando/repos.json')
      .then(function(response){
        self.repos = response.data;
        // self.repos = _.filter(response.data, function(repo){
        //   return !( repo.name.indexOf('FEE') === -1 );
        // });
      }, function(){
        console.log('WHY IS THIS HAPPENING!?');
      })
  }); // END controller(MainController)
})(window);
