(function(window) {
  //with query.load
  // $('main.container').load('views/repositories.html');

  var app = angular.module('tiy-gradebook', []);


  app.controller('MainController', function() {
    this.view = null;
    this.page = function(name) {
      this.view = 'views/404.html';
      if (name == 'repositories') {
        this.view = 'views/repositories.html';
      }
      if (name == 'milestones') {
        this.view = 'views/milestones.html';
      }
    }
    this.page('repositories');


    // $http.get('/api/github');

  });
})(window);