angular.module('app.models.game', [])
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
