//var name = "Yoyo";
//var age = 26;
//
//var message = "Hi, my name is " + name + " and I am " + age + " years old!";

//var firstName = "Yoyo";
//var lastName = "Lee";
//var dataOfBirth = "09-30-91";
//var age = 26;
//var profileImgUrl = '';
//
//var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + " birthday!";
//            alert(message);
//console.log(loginWelcomeMessage);
//brackets doesn't have this command

//var sum = 10 + 15;
//var sub = 15 - 10;
//var mul = 10 * 3;
//var div = 10 / 3;
//var mod = 10 % 3;
//var msg = "10 / 3 = 3 with a remainder of " + mod;
//var result = 10 * ((5 + 3) - 4) - 500
//console.log(sum);
//console.log(sub);
//console.log(mul);
//console.log(div);
//console.log(msg);
//console.log(result);

//var myAccountBalanace = 300;
//var nikeSBShoes = 799.23;
//var coupon = 500;
//
//if (nikeSBShoes <= myAccountBalanace) {
//    myAccountBalanace -= nikeSBShoes;
//    console.log("We just bought some dope shoes!");
//    console.log("Account Balance: " + myAccountBalanace);
//}
//else if (nikeSBShoes - coupon <= myAccountBalanace){
//    myAccountBalanace -= nikeSBShoes - coupon;
//    console.log("We just bought some dope shoes with a coupon!")
//    console.log("Account Balance: " + myAccountBalanace);
//    
//}
//else {
//    console.log("you too broke ofr shoes bra!");
//}

//var age = 23;
//var joesAge = "23";
//
//if (age !== joesAge){
//    console.log("These a are not the same!")
//}
//else{
//    console.log("One of these is like the other...")
//}

//if(1 === 1 && 2 === 2 || "joe" === "joe"){
//    console.log("These are both true!")
//}
//
//if(true && true){
//    console.log("These are the same!")
//}
//
//if(1 === 3 || "joe" === "joe"){
//    console.log("One of these are true!")
//}
//
//var cat1 = 5;
//var cat2 = 10;
//var cat3 = 1;
//var cat3DisabledHandicap = true;
//
//if (cat1 > cat2 && cat1 > cat3 && !cat3DisabledHandicap){
//    console.log("Cat1 is the cutest");
//}
//else if (cat2 > cat1 && cat2 > cat3 && !cat3DisabledHandicap){
//    console.log("Cat2 is the cutest");
//}
//else if (cat3 > cat1 && cat3 > cat2 || disabledHandicap){
//    console.log("Cat3 is the cutest");
//}

//var balance = [50, 1000, -300];
//
//var person = ["John", 12, "USA", true];
//// Don't do this
//
//var students = ["Timmy", "Janessa", "Arun"];
//
//var list = [];
//
//list.push(students[0]);
//
//var index = list.indexOf("Timmy");
//
//if (index > -1){
//    list.splice(index, 1);
//}
//
//console.log(list);
//
//var total = 10;
//for (var x = 0; x < total; x++) {
//    console.log(x);
//}

//var students = ["John", "Jacob", "Jack", "Henry", "Sean"]
//for (var x = 0; x < students.length; x++ ) {
//    console.log(students[x]);
//}

//for (var x = 0; x <= 15; x++) {
//    if (x % 2 == 0) {
//        console.log(x + " is even");
//    }
//    else {
//        console.log(x + " is odd");
//    }
//}

//function area(length, width) {
//    return length * width;
//}
//
//var area1 = area(10, 15);
//console.log(area(10, 15));
//
//var rectanglesAreas = []
//rectanglesAreas.push(area(10, 15));
//rectanglesAreas.push(area(4, 2));
//rectanglesAreas.push(area(29, 34));
//
//console.log(rectanglesAreas);


//var bankBalance = 500;
//
//function makeTransaction(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Succcessful");
//    } else {
//        console.log("Insufficient Funds");
//    }
//}
//console.log(bankBalance);
//makeTransaction(79.00);
//
//console.log(bankBalance);
//makeTransaction(2.32);
//
//console.log(bankBalance);
//makeTransaction(10.45);
//
//console.log(bankBalance);
//makeTransaction(450.00);
//
//var transaction = function(priceOfSale) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Succcessful");
//    } else {
//        console.log("Insufficient Funds");
//    }
//}
//transaction(10);

var students = []

function student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    };
}

students.push(new student("Jenny", "Laga", 5));
students.push(new student("Jack", "Lee", 25));
students.push(new student("Alice", "Hung", 15));

var student = students[0];

for (var key in student) {
    console.log(student[key]);
}

//for (var index = 0; index < students.length; index++) {
//    var student = students[index];
//    console.log(student.greeting());
//}


//var s1 = new student("Jenny", "Laga", 5);
//console.log(s1);
//console.log(s1.greeting());

//var student0 = {
//    firstName: "John",
//    lastName: "Parker",
//    age: 9,
//    greeting: function() {
//        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
//    }
//};

//console.log(student0.greeting());
//
//var student1 = new Object();
//student1.firstName = "Alice";
//student1.lastName = "Hung";
//student1.age = 10;
//
//var student2 = {};
//student2.firstName = "Jack";
//student2.lastName = "Lee";
//student2.age = 5;
//
//var students = [];
//students.push(student0);
//students.push(student1);
//students.push(student2);
//
//for (var index = 0; index < students.length; index++) {
//    console.log(students[index]);
//}


//console.log(student.firstName);
//console.log(student["firstName"]);