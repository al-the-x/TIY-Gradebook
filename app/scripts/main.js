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
    this.page('views/repositories.html');
    // app.controller('mileStone', ['$http', function($http) {
    //     var mile = this;
    //
    //       mile.repos = [ ]
    // $http.get('/api/github.repos/TIY/summerFee/milestones.json').success(function(){
    // });
    //  });
  }); // End of Main controller




  app.controller('ReposController', function($http) {
    var self = this;

    self.repos = [];

    $http.get('/api/github/repos/repos.json')
      .then(function(response) {
        self.repos = response.data;
      }, function() {
        console.log('why is this happening?');
      })
  }); // End of ReposController




})(window);