angular.module("listings").controller("ListingsController", [
  "$scope",
  "Listings",
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    getListings = () => {
      Listings.getAll().then(
        res => {
          $scope.listings = res.data;
        },
        err => {
          console.log("Unable to retrieve listings:", err);
        }
      );
    };

    getListings();

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      /**TODO 
      *Save the article using the Listings factory. If the object is successfully 
      saved redirect back to the list page. Otherwise, display the error
    */
      Listings.create($scope.newListing).then(
        res => {
          console.log("Created listing.", res);
          getListings();
        },
        err => {
          console.log("Failed to create new listing. [" + err + "]");
          window.alert("Failed to create new listing.");
        }
      );
    };

    $scope.deleteListing = function(index) {
      /**TODO
        Delete the article using the Listings factory. If the removal is successful, 
		    navigate back to 'listing.list'. Otherwise, display the error. 
       */
      Listings.delete($scope.listings[index]["_id"]).then(
        res => {
          console.log("Deleted listing.", $scope.listings[index]["_id"]);
          getListings();
        },
        err => {
          console.log("Failed to delete listing. [" + err + "]");
          window.alert("Failed to delete listing.");
        }
      );
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
