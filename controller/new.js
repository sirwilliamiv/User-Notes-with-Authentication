app.controller('NewCtrl', function($scope, noteFactory) {

  $scope.addToTheList = (note) => {
    noteFactory.addToTheList(note)
  }
})
