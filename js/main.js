//alert("holla");

var user = {
	firstName: "Haruki",
	lastName: "Marukami",
	emailAddress: "marukami@gmail.com",
	age: 90,
	property: [{
		location: "london",
		type: "townhouse",
		price: 8000000
	}, {
		location: "kenya",
		type: "farm",
		price: 4000000
	}, {
		location: "cape town",
		type: "apartment",
		price: 5500000
	}],
	gender: "male",
	maritalStatus: "divorced",
	exwives: ["sally", "georgia", "ophelia", "bill"],
	children: [{
		name: 'Mark',
		age: 21,
		amount: 3213
	}, {
		name: 'Mary',
		age: 18,
		amount: 3000
	}, {
		name: 'John',
		age: 12,
		amount: 1980
	}, {
		name: 'James',
		age: 2,
		amount: 1200
	}]
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


//_______________DAY 4_____________________//

// switch(user.age) {
// 	case 30:
// 		alert('30');
// 		break;
// 	case 31:
// 		alert('31');
// 		break;
// 	case 32:
// 		alert('32');
// 		break;
// 	default:
// 		alert("not 30, 31, or 32");
// }


//_______________DAY 4_____________________//
console.log("_______________DAY 4_____________________")


var workingHours = [
	'08:00',
	'09:00',
	'10:00',
	'11:00',
	'12:00',
	'14:00',
	'15:00',
	'16:00'
];

// var count = 0;
// while(count < invoiceItems) {
// 	console.log(count);

// 	// currentValue = currentValue + 1
// 	// currentValue += 1
// 	count++
// }

// for(i=0;i<workingHours.length;i++) {
// 	console.log( workingHours[i] );
// }

for(i=0;i<user.property.length;i++) {
	console.log( user.property[i].location );
};

for(i=0;i<user.property.length;i++) {
	console.log( user.property[i].price );
};

for(i=0;i<user.property.length;i++) {
	if (user.property[i].price > 5000000) {
		console.log(user.property[i].location + ": this propety costs more than R5 000 000");
	} else {
		console.log(user.property[i].location + ": this propety costs less than R5 000 000");
	}
};

for(i=0;i<user.property.length;i++) {
	if (user.property[i].type == "apartment") {
		console.log(user.property[i].location + ": this property is an apartment!");
	} else {
		console.log(user.property[i].location + ": this property is not an apartment. It is a " + user.property[i].type + ".")
	}
}


//-------------------- mixing functions and loops ---------------------//

function percentageNumber(number, percent) {
	return (percent / 100) * number
}

function maintenanceDeduction(user) {
	// Loop through the user's children
	   // If child is younger than 18,
	   // add the amount to the total maintenance amount
	// Return the total maintenance amount

	if(!user) {
		return;
	}

	var maintenanceAmount = 0;

	if(user.children && typeof(user.children) == 'object') {
		console.log('--- Inclusion on if');
		for(i=0;i<user.children.length;i++) {
			console.log('--- Within loop. Index: ' + i);
			var child = user.children[i];

			if(child.age && child.amount) {
				if(child.age < 18) {
					maintenanceAmount += child.amount
				}
			}

			console.log(child);
		}
	} else {
		console.log('--- Exclusion on if');
	}

	return maintenanceAmount;
}

function calculateDeductions(user) {
	return maintenanceDeduction(user) + percentageNumber(user.salary, 14)
}

var salary = user.salary,
		deductions = calculateDeductions(user),
		salaryAfterDeductions = salary - deductions;

alert('Get ready');

var salaryDiv = document.getElementById('userSalary');

salaryDiv.innerHTML = salary;





































