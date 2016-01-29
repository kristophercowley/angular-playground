var app = angular.module('angularPlayground');

app.controller('ControllersController', ControllersController);


function ControllersController(){
	this.controllersStatus = 'Working';
	this.friends =[];
	this.addFriend = function(personToAdd){
		this.friends.push(personToAdd);
		this.newFriend = "";
	}
}