(function (global) {
	'use strict';
	
	const App = global.App || {};

	function DataStore() {
		this.data = {};
	}

	DataStore.prototype.add = function(key, val) {
		this.data[key] = val;
	};

	App.DataStore = DataStore;
	global.App = App;

})(window);