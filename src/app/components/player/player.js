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

          var location = e.clientY > 264 ? 264 : e.clientY;
          location = location < -5 ? -5 : location;

          elem.css('top',location + 'px');
          console.log(location);

        });
      });

      elem.parent().on('mouseup', function(){
        elem.parent().off('mousemove');
      });

    }
  };
});
