"use strict";

app.run((FIREBASE_CONFIG) => {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
    $routeProvider
        // .when('/contacts/list', {
        //     templateUrl: 'partials/item-list.html',
        //     controller: 'ItemListCtrl'
        // })
        .when('/contact/display', {
            templateUrl: 'partials/display-contacts.html',
            controller: 'DisplayContactsCtrl'
        })
        .when('/contact/new', {
            templateUrl: 'partials/new-contact.html',
            controller: 'NewContactCtrl'
        })
        .when('/login', {
            templateUrl: 'partials/login-view.html',
            controller: 'AuthCtrl'
        })
        // .when('/items/view/:id', { // colon means the value will change
        //     templateUrl: 'partials/item-view.html',
        //     controller: 'ItemViewCtrl'
        // })
        // .when('/items/edit/:id', {
        //     templateUrl: 'partials/item-new.html',
        //     controller: 'ItemEditCtrl'
        // })
        .otherwise('/login'); // This could be a 404 error...
});