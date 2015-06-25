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

  app.controller('MilestoneController', function($http){
    var self = this;
    self.repoMilestones = [ ];

    $http.get('/api/github/milestones.json')
      .then(function(classMilestones){
        console.log(classMilestones);
        self.repoMilestones = classMilestones.data;
      });
  });

})(window);
