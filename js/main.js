//alert("holla");

var user = {
	firstName: "alexandria",
	lastName: "procter",
	emailAddress: "asprocter@gmail.com",
	age: 24,
	property: [{
		location: "london",
		type: "townhouse"
	}, {
		location: "kenya",
		type: "farm"
	}, {
		location: "cape town",
		type: "apartment"
	}],
	gender: "female"
};

console.log(user.firstName + " " + user.lastName);

console.log(`${user.firstName} ${user.lastName}`); //this is a complex string. note that you have to use ` which are not normal quotation marks!

console.log(user.property[1].type)