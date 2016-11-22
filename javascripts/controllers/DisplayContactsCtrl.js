"use strict";

app.controller("DisplayContactsCtrl", function($scope, $location, ContactFactory) {
    $scope.contacts = [];

    $scope.displayContacts = () => {
        // Add logic to capture info from all fields and add it to db
        ContactFactory.getContactList().then((response) => {
            console.log(response);
            $scope.contacts = response;
        });
    };

    $scope.test = () => {
        console.log("test");
    };

    $scope.displayContacts();
});