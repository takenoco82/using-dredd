'use strict';


/**
 * Create a new user.
 * 
 *
 * body WriteUser Created user object
 * returns User
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "userStatus" : 6,
  "phone" : "phone",
  "userId" : 0,
  "email" : "email",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete the user.
 * 
 *
 * userId Long 
 * no response value expected for this operation
 **/
exports.deleteUser = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get the user.
 * 
 *
 * userId Long 
 * returns User
 **/
exports.getUser = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "userStatus" : 6,
  "phone" : "phone",
  "userId" : 0,
  "email" : "email",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lists users.
 * 
 *
 * sort String  (optional)
 * returns Users
 **/
exports.getUsers = function(sort) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "users" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "userStatus" : 6,
    "phone" : "phone",
    "userId" : 0,
    "email" : "email",
    "username" : "username"
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "userStatus" : 6,
    "phone" : "phone",
    "userId" : 0,
    "email" : "email",
    "username" : "username"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the user.
 * 
 *
 * userId Long 
 * body WriteUser Updated user object
 * returns User
 **/
exports.updateUser = function(userId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "userStatus" : 6,
  "phone" : "phone",
  "userId" : 0,
  "email" : "email",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

