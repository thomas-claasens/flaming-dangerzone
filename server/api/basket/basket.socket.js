/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Basket = require('./basket.model');

exports.register = function(socket) {
  Basket.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Basket.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('basket:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('basket:remove', doc);
}