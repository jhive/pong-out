angular.module('app.components.player', [])
.directive('player', function(){
  return {
    restrict: 'E',
    template: '<div class="player brick"></div>',
    scope: {},
    link: function(scope, elem){
      console.log("hello");

      elem.on('mousedown', function(){
        elem.parent().on('mousemove', function(e){
          console.log(e);
          elem.css('top', e.clientY + "px");
        });
      });

      elem.parent().on('mouseup', function(){
        elem.parent().off('mousemove');
      });

    }
  };
});
