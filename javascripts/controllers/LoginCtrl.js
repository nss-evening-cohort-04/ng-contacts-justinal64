"use strict";

app.controller("LoginCtrl", function($scope, $location, ContactFactory) {
    $scope.newContact = [];

    $scope.login = () => {
        ContactFactory.getContactList().then((response) => {
            $location.url("/contact/display");
        });
    };

    $scope.register = () => {
        console.log("register");
    };
});