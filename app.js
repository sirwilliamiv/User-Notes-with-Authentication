//  // Initialize Firebase
// firebase.initializeApp({
//     apiKey: "AIzaSyCzTur6XdtgcbMF3WHHkYIVIgrlmYIcgGc",
//     authDomain: "usernotes-5d3cb.firebaseapp.com",
//     databaseURL: "https://usernotes-5d3cb.firebaseio.com",
//     storageBucket: "usernotes-5d3cb.appspot.com",
//     messagingSenderId: "391673845523"
//   });


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
