'use strict';

const db = require('@arangodb').db;

module.exports = function verifyCollection(req, res, next) {
  const collName = req.pathParams.collection;
  const coll = db._collection(collName);
  if (!coll) {
    return res.throw(404, `Collection '${collName}' does not exist in DB.`);
  }

  next();
};