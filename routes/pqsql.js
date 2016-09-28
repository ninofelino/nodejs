'use strict';

var promise = require('bluebird'); 
var options = {promiseLib: promise};
var pgp = require('pg-promise')(options);
var cn = {host: 'localhost',port: 5432,database: 'adempiere',user: 'adempiere',password: 'adempiere'};
var db = pgp(cn); 

exports.list = function(req,res)
{db.any("select name from ad_user", [true]).then(function (data) {res.json(data);}).catch(function (error) {console.log("ERROR:", error);}).finally(function () {pgp.end(); });};