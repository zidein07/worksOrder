app.directive('translateSelect', function () {
  return {
    restrict: 'E',
    templateUrl: '/src/partials/base/select.html',
    controller: [
      '$scope', '$translate', 'localStorageService',
      function ($scope, $translate) {
        $scope.translateSelect = $translate.use();
        $scope.changeSelect = function () {
          $translate.use($scope.translateSelect);
        };
      }]
  };
});
