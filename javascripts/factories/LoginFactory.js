"use strict";

app.factory("LoginFactory", function($q, $http, FIREBASE_CONFIG) {

    var loginUser = function($user) {
        return $q((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword($user.email, $user.password)
            .then((response) => {
                resolve(response);
            })
            .catch((errorResponse) => {
                reject(errorResponse);
            });
        });
    };

    var registerUser = ($user) => {
    console.log("$user", $user);
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword($user.email, $user.password)
            .then((authData) =>{
              resolve(authData);
            })
            .catch((error)=>{
              reject(error);
            });
        });
    };

    return{loginUser: loginUser, registerUser: registerUser};
});