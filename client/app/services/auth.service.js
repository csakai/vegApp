angular.module("vegApp")
  .controller('loginCtrl', function ($scope, $location, AuthSvc) {
    $scope.user = {};
    $scope.login = function () {
      AuthSvc.login($scope.user)
        .then(function success() {
          $location.path('/');
        }, function reject(err) {
          console.log('Error', err);
      });
    };
  }).factory("AuthSvc", function($cookies, $q, $http) {
    console.log('cookies is', $cookies);
    var _user = {
      authenticated: function() {
        return this.username != null;
      }
    };
    return {
      login: login,
      setUser: setUser,
      logout : logout,
      user   : _user,
      getToken : getToken
    };
    function getToken() {
      return $cookies.getObject('token');
    }
    function logout(){
      delete _user.username;
      $cookies.remove('token');
    }

    function setUser(){
      if(!$cookies.token)
        return;
      console.log('tokenObj', $cookies.token);
      return $http.get('/api/users/me')
        .then(function(response){
          _user.username = response.data.username;
           return response.data;
        }
      );
    }

    function login(user){
      var dfd = $q.defer();
      $http.post('/auth/login', user)
        .then(function(result){
          $cookies.token = result.data.token;
          setUser().then(function(result2){
            dfd.resolve(_user);
          });
        },
        function(result){
          dfd.reject(result.data.error);
        }
      );
      return dfd.promise;
    }

});
