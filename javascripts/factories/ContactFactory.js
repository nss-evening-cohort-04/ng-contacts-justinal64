"use strict";

app.factory("ContactFactory", function($q, $http, FIREBASE_CONFIG) {

    var getContactList = function() {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
            .success((response) => {
                let items = [];
                Object.keys(response).forEach((key) => {
                    response[key].id = key;
                    items.push(response[key]);
                });
                resolve(response);
            })
            .error((errorResponse) => {
                reject(errorResponse);
            });
        });
    };

    var postNewContact = function(newItem) {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`,
                JSON.stringify({
                    assignedTo: newItem.assignedTo,
                    isCompleted: newItem.isCompleted,
                    task: newItem.task
                })
            )
            .success((postResponse) => {
                resolve(postResponse);
            })
            .error((postError) => {
                reject(postError);
            });
        });
    };

    return{getContactList: getContactList, postNewContact: postNewContact};
});