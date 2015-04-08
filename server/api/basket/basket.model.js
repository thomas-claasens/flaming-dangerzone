'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BasketSchema = new Schema({
	orderDate: Date, 
	country: {
		name: String,
		postZone: {
			name: String,
			multiplier: Number, 
			flatRate: Number
		}
	}, 
	user: {
		email: String, 
		role: {
			name: String
		}
	},
	basketItems : [
	{
		quantity: Number, 
		size: {
			name: String
		}
	}]
});

module.exports = mongoose.model('Basket', BasketSchema);