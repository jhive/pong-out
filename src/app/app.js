var module = angular.module('pong',
  [
    'app.models.game',
    'app.rendering.brick-board'
  ])
  .run(function($rootScope, game){
    $rootScope.game = game;
  });
