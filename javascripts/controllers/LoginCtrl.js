"use strict";

app.controller("LoginCtrl", ($scope, FIREBASE_CONFIG, ContactFactory) => {
    $scope.loginUser = {};
    $scope.contacts = {};

    $scope.login = () => {
    console.log("Login is being clicked!!!!!!");
    console.log("FIREBASE_CONFIG", FIREBASE_CONFIG);
    getContacts();

    // getContacts();
    // if($scope.login_email === undefined) {
    //     console.log("email address invalid");
    // }
        // ContactFactory.postNewContact($scope.newContact).then((contactId) => {
            //     // getItems();
            //     // Clear out the contact fields
            //     $scope.newContact = {};
            //     $scope.showListView = true;
        // });
    };

    let getContacts = function() {
        ContactFactory.getContactList().then(function(fbContacts) {
            $scope.contacts = fbContacts;
            console.log("items from controller", $scope.contacts);
        });
    };

    $scope.check_email = () => {
        if($scope.login_email === undefined) {
            console.log("email address invalid");
        }
    };

    $scope.register = () => {
        console.log("register button is working");
    };

    // $scope.submit = () => {
    //     console.log("submit working");
    // };
});