"use strict";

app.controller("DisplayContactsCtrl", function($scope, $location, ContactFactory) {
    $scope.contacts = [];

    $scope.displayContacts = () => {
        // Add logic to capture info from all fields and add it to db
        ContactFactory.getContactList().then((response) => {
            $scope.contacts = response;
        });
    };

    // deleteItem = function(itemId)

    $scope.deleteContact = (contactId) => {
        console.log("contactId to delete", contactId);
            // Delete Contact from FB
            ContactFactory.deleteItem(contactId).then((response) => {
                // Get the list of contacts from the server
                return ContactFactory.getContactList().then((response) => {
                // Repopulate contacts from FB
                $scope.contacts = response;
            });
        });
    };



    $scope.displayContacts();
});