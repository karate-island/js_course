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

console.log(user.property[1].type);

//practice adding something to an array or object



//_______________DAY 2_____________________//




function greetUser(firstName) {
	if(firstName) {
		alert('Hello, '+ firstName);
	}	else {
		console.log("no firstName was specified");
	}
}

function sumNumber(number=1) {   	//here we've given the var "number" a default value of 0
	if(number) {
		alert(127+number);
	}
}


var shoppingCart = ["tomatoes", "salt", "bread"]

function addToCart(item) {
	if(item) {
		shoppingCart.push(item);
	}
	else {
		console.log("you haven't added anything to your cart!")
	}
}


















