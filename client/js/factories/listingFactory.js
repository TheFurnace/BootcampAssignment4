angular.module("listings", []).factory("Listings", function($http) {
  var _url = "https://uf-directory-app-ferndq.herokuapp.com";
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
