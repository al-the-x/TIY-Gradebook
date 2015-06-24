(function(window) {
  // With jQuery.load...
  // $('main.container').load('views/repositories.html');

  var app = angular.module('tiy-gradebook', [ ]);

  app.controller('MainController', function(){
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
  }); // END controller(MainController)
})(window);
