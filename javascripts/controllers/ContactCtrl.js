"use strict";

app.controller("ContactFormCtrl", ($scope) => {
    $scope.welcome = "hello";
    $scope.newContact = {};

    $scope.addNewContact = () => {
        console.log("newTask in function", $scope.newContact);
        // ContactFactory.postNewContact($scope.newContact).then((contactId) => {
        //     // getItems();
        //     // Clear out the contact fields
        //     $scope.newContact = {};
        //     $scope.showListView = true;
        // });
    };
});