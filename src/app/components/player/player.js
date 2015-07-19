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
          console.log(e.clientY);

          if (e.clientY > 264) {
            elem.css('top', 264 + 'px');
          }
          else if (e.clientY < -5){
            elem.css('top', -5 + 'px');
          }
          else {
            elem.css('top', e.clientY + "px");
          }
        });
      });

      elem.parent().on('mouseup', function(){
        elem.parent().off('mousemove');
      });

    }
  };
});
