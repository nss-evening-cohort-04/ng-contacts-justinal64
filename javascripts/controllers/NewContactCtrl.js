"use strict";

app.controller("NewContactCtrl", function($scope) {
    $scope.newContact = [];

    $scope.test = () => {
        // Add logic to capture info from all fields and add it to db
        console.log("test");
    };
});