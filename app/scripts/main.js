(function(window){
  // with jQuery.load
  // $('main.container').load('views/repositories.html');

  var app = angular.module('tiy-gradebook', [ ]);

  app.controller('MainController', function($http){
    this.view = null;
    this.page = function(name){
      this.view = 'view/404.html';
      if ( name == 'milestones' ){
        this.view = 'views/milestones.html';
      }
      if ( name == 'repositories' ){
        this.view = 'views/repositories.html';
      }
    };

    this.repos = [
        {name: '2015--SUMMER--FEE',
        created_by: 'David Rogers',
        created_by_url:'https://github.com/al-the-x',
        created_by_github_user: 'al-the-x',
        attendance: 'https://github.com/TheIronYard--Orlando/2015--SUMMER--FEE/issues?utf8=%E2%9C%93&q=is%3Aall+label%3AAttendance+',
        github: 'https://github.com/TheIronYard--Orlando/2015--SUMMER--FEE'},
        {name: '2015--SUMMER--FEE',
        created_by: 'David Rogers',
        created_by_url:'https://github.com/al-the-x',
        created_by_github_user: 'al-the-x',
        attendance: 'https://github.com/TheIronYard--Orlando/2015--SUMMER--FEE/issues?utf8=%E2%9C%93&q=is%3Aall+label%3AAttendance+',
        github: 'https://github.com/TheIronYard--Orlando/2015--SUMMER--FEE'},
        {name: '2015--SUMMER--FEE',
        created_by: 'David Rogers',
        created_by_url:'https://github.com/al-the-x',
        created_by_github_user: 'al-the-x',
        attendance: 'https://github.com/TheIronYard--Orlando/2015--SUMMER--FEE/issues?utf8=%E2%9C%93&q=is%3Aall+label%3AAttendance+',
        github: 'https://github.com/TheIronYard--Orlando/2015--SUMMER--FEE'},
        {name: '2015--SUMMER--FEE',
        created_by: 'David Rogers',
        created_by_url:'https://github.com/al-the-x',
        created_by_github_user: 'al-the-x',
        attendance: 'https://github.com/TheIronYard--Orlando/2015--SUMMER--FEE/issues?utf8=%E2%9C%93&q=is%3Aall+label%3AAttendance+',
        github: 'https://github.com/TheIronYard--Orlando/2015--SUMMER--FEE'},
        {name: '2015--SUMMER--FEE',
        created_by: 'David Rogers',
        created_by_url:'https://github.com/al-the-x',
        created_by_github_user: 'al-the-x',
        attendance: 'https://github.com/TheIronYard--Orlando/2015--SUMMER--FEE/issues?utf8=%E2%9C%93&q=is%3Aall+label%3AAttendance+',
        github: 'https://github.com/TheIronYard--Orlando/2015--SUMMER--FEE'}
      ];

    $http.get('/api/github/repos.json')
      .then(function(repos){
        console.log(repos);
      });
  }); // END controller(MainController)

})(window);
