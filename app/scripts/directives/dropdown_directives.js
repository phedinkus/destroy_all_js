'use strict';

angular.module('DropdownDirectives', [])
  .directive('magicDropdown', function(){
    return {
      restrict: 'E',
      template: '<div class="closed">Magic Dropdown</div>',
      replace: true,
      link: function(scope, element){
        element.on('click', function(){
          element.toggleClass('closed open');
        });
      }
    };
  });

