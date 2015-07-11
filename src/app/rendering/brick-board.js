angular.module('app.rendering.brick-board', [
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
