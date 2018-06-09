(function (global) {
'use strict';

const App = global.App || {};

function Truck(truckId, db) {
	this.truckId = truckId;
	this.db = db;
}

Truck.prototype.createOrder = function(order) {
	console.log('Adding order for ' + order.emailAddress);
	this.db.add(order.emailAddress, order);
};

Truck.prototype.deliverOrder = function (customerId) {
	console.log('Delivering order for ' + customerId);
	this.db.remove(customerId);
};

Truck.prototype.printOrders = function () {
	
	const customerIdArray = Object.keys(this.db.getAll());

	customerIdArray.forEach((id) => {
		console.log(this.db.get(id));
	});
};

App.Truck = Truck;

global.App = App;

})(window);