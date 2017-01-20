
app.controller('NotesCtrl', function($scope, noteFactory){

    $scope.savedNote = noteFactory.gettheNote()
    $scope.bigDelete = (value) => {
      noteFactory.bigDelete(value)
    }

})
