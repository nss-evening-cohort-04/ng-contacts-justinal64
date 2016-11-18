"use strict";

app.controller("LoginCtrl", ($scope, FIREBASE_CONFIG, LoginFactory, ContactFactory, $rootScope) => {
    $scope.user = {};
    $scope.contacts = {};
    $rootScope.showListView = true;
    var uid = "";

    $scope.login = () => {
        $scope.user = {
            "email": $scope.user.login_email,
            "password": $scope.user.login_password,
            "username": $scope.user.login_username
        };

        LoginFactory.loginUser($scope.user)
        .then((response) => {
            uid = response.uid;
            console.log("uid", uid);
            $rootScope.showListView = false;
        });
    };

    $scope.register = () => {
        $scope.user = {
            "email": $scope.user.login_email,
            "password": $scope.user.login_password,
            "username": $scope.user.login_username
        };

        LoginFactory.registerUser($scope.user).then((credentials) => {
                uid = credentials.uid;
                LoginFactory.loginUser($scope.user)
                .then((results) => {
                    console.log("results", results);

                });
            });

        };

    $scope.check_email = () => {
        if($scope.login_email === undefined) {
            console.log("email address invalid");
        }
    };

});