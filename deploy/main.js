var module = angular.module('pong',
  [
    'app.models.game',
    'app.rendering.brick-board'
  ])
  .run(function($rootScope, game){
    $rootScope.game = game;
  });
;angular.module('app.models.game', [])
  .factory('game', function(){
    var bricks = [
      [1,1,1,1,1],
      [1,0,1,0,1],
      [1,1,1,1,1],
      [1,0,1,0,1],
      [1,1,1,1,1]
    ];

    return {
      bricks: bricks
    };
  });
;angular.module('app.rendering.brick-board', [
    'app.rendering.brick'
  ])
  .directive('brickBoard', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/rendering/brick-board.tmpl',
      scope: {
        bricks: '='
      },
      link: function(scope){
        console.log(typeof scope.bricks);
      }
    };
  });
;angular.module('app.rendering.brick',[])
  .directive('brick', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/rendering/brick.tmpl',
      scope: {
        alive: '='
      },
      link: function(scope, elem, attrs){
        if(!scope.alive){
          elem.addClass('hidden');
        }
      }
    };
  });
