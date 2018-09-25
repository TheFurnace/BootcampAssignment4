angular.module("listings", []).factory("Listings", function($http) {
  var _url = "https://uf-directory-app-ferndq.herokuapp.com";
  var methods = {
    getAll: function() {
      return $http.get(_url + "/api/listings");
    },

    create: function(listing) {
      return $http.post(_url + "/api/listings", listing);
    },

    delete: function(id) {
      return $http.delete(_url + "/api/listings/" + id);
    }
  };

  return methods;
});
