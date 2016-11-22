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

    var deleteItem = function(contactId) {
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
            .success((deleteResponse) => {
                resolve(deleteResponse);
            })
            .error((deleteError) => {
                reject(deleteError);
            });
        });
    };

    var getSingleItem = function(itemId) {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
            .success((getSingleResponse) => {
                resolve(getSingleResponse);
            })
            .error((getSingleError) => {
                reject(getSingleError);
            });
        });
    };

    var editItem = function(editItem) {
        console.log("factory edit", editItem);
        return $q((resolve, reject)  => {
            $http.put(`${FIREBASE_CONFIG.databaseURL}/items/${editItem.id}.json`,
                    JSON.stringify({
                        assignedTo: editItem.assignedTo,
                        isCompleted: editItem.isCompleted,
                        task: editItem.task
                    })
                )
            .success((editResponse) => {
                resolve(editResponse);
            })
            .error((editError) => {
                reject(editError);
            });
        });
    };

    return{getContactList: getContactList, postNewContact: postNewContact, deleteItem: deleteItem, getSingleItem: getSingleItem, editItem: editItem};
});