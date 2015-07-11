angular.module('app.rendering.brick',[])
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
