'use strict';

var _ = require('lodash');
var Basket = require('./basket.model');

// Get list of baskets
exports.index = function(req, res) {
  Basket.find(function (err, baskets) {
    if(err) { return handleError(res, err); }
    return res.json(200, baskets);
  });
};

// Get a single basket
exports.show = function(req, res) {
  Basket.findById(req.params.id, function (err, basket) {
    if(err) { return handleError(res, err); }
    if(!basket) { return res.send(404); }
    return res.json(basket);
  });
};

// Creates a new basket in the DB.
exports.create = function(req, res) {
  Basket.create(req.body, function(err, basket) {
    if(err) { return handleError(res, err); }
    return res.json(201, basket);
  });
};

// Updates an existing basket in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Basket.findById(req.params.id, function (err, basket) {
    if (err) { return handleError(res, err); }
    if(!basket) { return res.send(404); }
    var updated = _.merge(basket, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, basket);
    });
  });
};

// Deletes a basket from the DB.
exports.destroy = function(req, res) {
  Basket.findById(req.params.id, function (err, basket) {
    if(err) { return handleError(res, err); }
    if(!basket) { return res.send(404); }
    basket.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}