angular.module("listings", []).factory("Listings", function($http) {
  var _url = process.env.PORT
    ? "https://uf-directory-app-ferndq.herokuapp.com"
    : "http://localhost:8080";
  var methods = {
    getAll: function() {
      return $http.get(url + "/api/listings");
    },

    create: function(listing) {
      return $http.post(url + "/api/listings", listing);
    },

    delete: function(id) {
      return $http.delete(url + "/api/listings/" + id);
    }
  };

  return methods;
});
