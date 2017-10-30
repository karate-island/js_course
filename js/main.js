//alert("holla");

var user = {
	firstName: "Haruki",
	lastName: "Marukami",
	emailAddress: "marukami@gmail.com",
	age: 40,
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
	gender: "male",
	maritalStatus: "divorced",
	exwives: ["sally", "georgia", "ophelia", "bill"],
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


//_______________DAY 3_____________________//

var price = 100000,
	ageMin = 50,
	ageMax = 65,
	taxBreakonAgeMin = 10,
	taxBreakonAgeMax = 20,
	taxBreakOnProperty = 10; //by doing "," and not ";" we can declare a lot of global variables at once!

var discount = 0,
	totalPrice = price;

if (user.age >= ageMax) {								// always arrange your if else statements 
	totalPrice = totalPrice - taxBreakonAgeMax;    		// with whatever's most likely to be false 
} else if (user.age >= ageMin) {						// being first
	totalPrice = totalPrice - taxBreakonAgeMin;
}

console.log("your age is: " + user.age);
console.log("your total price is: R" + totalPrice);
var ageSave = price - totalPrice;
console.log("your old age discount is: R" + ageSave);


console.log("________________________________");


console.log("for every property you own you will get a further tax break!");

if (user.property.length > 0) {
	totalPrice = totalPrice - (taxBreakOnProperty * user.property.length);
}

console.log("you own " + user.property.length + " properties.");
console.log("your new total price is: R" + totalPrice);
var propSave = taxBreakOnProperty * user.property.length;
console.log("your property savings are: R" + propSave);

console.log("________________________________");

console.log ("you saved R" + ageSave + " for old age and R" + propSave + " for property ownership, giving you a total saving of R" + (price - totalPrice) + ". Nice!");

console.log("________________________________");


console.log("however! if you are a divorced male then you'll need to pay alimony, which is R500 per property payable to each exwife.");

console.log("your gender is " + user.gender);

var alimony = (500 * user.property.length) * user.exwives.length;

if (user.gender == "male" && user.maritalStatus == "divorced") {
	totalPrice = totalPrice + alimony;
	console.log("number of exwives: " + user.exwives.length);
	console.log("your total alimony payment is R" + alimony);
	console.log("so your new total price is R" + totalPrice);
} else {
	console.log("so your total price is unchanged, at R" + totalPrice);
}















