function login (user, password) {
  return $http.post('/authenticate', {username: user, password: password})
    .then(function success(response) {
      console.log('token', response.data.token);
      $cookieStore.put('token', JSON.stringify(response.data.token));
      go('user');
    });
}

request : function()
