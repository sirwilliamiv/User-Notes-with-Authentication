 // Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCzTur6XdtgcbMF3WHHkYIVIgrlmYIcgGc",
    authDomain: "usernotes-5d3cb.firebaseapp.com",
    databaseURL: "https://usernotes-5d3cb.firebaseio.com",
    storageBucket: "usernotes-5d3cb.appspot.com",
    messagingSenderId: "391673845523"
  });










var app = angular.module('noteApp',['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
  .when('/login', {
    conntroller:'LoginCtrl',
    templateUrl: 'pages/login.html'
  })
  .when('/register', {
    controler:'RegisterCtrl',
    templateUrl:'pages/register.html'
  })
  .when('/notes', {
    controler:'NotesCtrl',
    templateUrl:'pages/notes.html'
  })
  .when('/new', {
    controler:'NewCtrl',
    templateUrl:'pages/new.html'
  })
})


app.controller('LoginCtrl', function($scope) {

})

app.controller('RegisterCtrl', function($scope) {

})

app.controller('NotesCtrl',function($scope){


  $scope.todos =[
      {"name": "clean the house"},
      {"name": "feed the dog"},
      {"name": "shoot stuff"},
      {"name": "coe"},
      {"name": "misspelle thingsy"},
      {"name": "jumpe"}
      ]
})
app.controller('NewCtrl', function($scope) {

})
