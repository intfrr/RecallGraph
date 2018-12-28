'use strict';

const commit = require('../operations/commit');
const DB_OPS = require('../helpers').DB_OPS;

function createSingle({ pathParams, body }) {
  return commit(pathParams.collection, body, DB_OPS.INSERT);
}

function createMultiple({ pathParams, body }) {
  const nodes = [];
  body.forEach(node => {
    try {
      nodes.push(createSingle({ pathParams, body: node }));
    } catch (e) {
      nodes.push(e);
    }
  });

  return nodes;
}

module.exports = {
  createSingle,
  createMultiple
};