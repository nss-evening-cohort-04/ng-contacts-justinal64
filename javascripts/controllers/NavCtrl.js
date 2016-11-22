"use strict";

app.controller("NavCtrl", function($scope) {
    $scope.navItems = [{name: "Logout", url: "#/logout"},
    {name:"All Contacts", url: "#/contact/display"},
    {name:"New Contact", url: "#/contact/new"}];
});