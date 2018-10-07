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
  "first_name" : "first_name",
  "last_name" : "last_name",
  "user_status" : 6,
  "phone" : "phone",
  "user_id" : 0,
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
 * user_id Long
 * no response value expected for this operation
 **/
exports.deleteUser = function(user_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get the user.
 *
 *
 * user_id Long
 * returns User
 **/
exports.getUser = function(user_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "first_name" : "first_name",
  "last_name" : "last_name",
  "user_status" : 6,
  "phone" : "phone",
  "user_id" : 0,
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
    "first_name" : "first_name",
    "last_name" : "last_name",
    "user_status" : 6,
    "phone" : "phone",
    "user_id" : 0,
    "email" : "email",
    "username" : "username"
  }, {
    "first_name" : "first_name",
    "last_name" : "last_name",
    "user_status" : 6,
    "phone" : "phone",
    "user_id" : 0,
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
 * user_id Long
 * body WriteUser Updated user object
 * returns User
 **/
exports.updateUser = function(user_id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "first_name" : "first_name",
  "last_name" : "last_name",
  "user_status" : 6,
  "phone" : "phone",
  "user_id" : user_id,
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

