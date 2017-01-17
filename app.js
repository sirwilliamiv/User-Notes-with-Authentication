 // Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCzTur6XdtgcbMF3WHHkYIVIgrlmYIcgGc",
    authDomain: "usernotes-5d3cb.firebaseapp.com",
    databaseURL: "https://usernotes-5d3cb.firebaseio.com",
    storageBucket: "usernotes-5d3cb.appspot.com",
    messagingSenderId: "391673845523"
  });


//listens for changes  from login/signout
// firebase.auth().onAuthStateChanged(function(){
//
//
// })


// Register
// firebase.auth().createUserWithEmailAndPassword(email, password)

// Login
// // //login when hit login button
// $('.login-page form').submit((e) => {
//  var email = $('input[type="email"]').val()
//  var password=$('input[type="password"]').val()

//  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
//   $('form')[0].reset()
//  })
//   e.preventDefault()
// });






//app
const app = angular.module('noteApp',['ngRoute'])


//routes
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('')
  $routeProvider
  .when('/login', {
    controller:'LoginCtrl',
    templateUrl: 'pages/login.html'
  })
  .when('/register', {
    controller:'RegisterCtrl',
    templateUrl:'pages/register.html'
  })
  .when('/notes', {
    controller:'NotesCtrl',
    templateUrl:'pages/notes.html'
  })
  .when('/new', {
    controller:'NewCtrl',
    templateUrl:'pages/new.html'
  })
})

//controllers
app.controller('LoginCtrl', function($scope, $http) {
  $scope.user =[]

})

app.controller('RegisterCtrl', function($scope,$http) {
  $scope.user =[]

})

app.controller('NotesCtrl', function($scope,$http){
  $scope.addToTheList = function(){
    $scope.savedNote.push($scope.newNote)
  }
  $scope.savedNote = []
  $scope.bigDelete= function(value) {
    if($scope.savedNote.includes(value)) {
      var index = $scope.savedNote.indexOf(value)
      $scope.savedNote.splice(index, 1)
    }

  }

  // $scope.deleteThis = function(bigDelete) {
  //    var domMissle = $scope.savedNote.filter(bigDelete)
  // }



})
app.controller('NewCtrl', function($scope) {

})
