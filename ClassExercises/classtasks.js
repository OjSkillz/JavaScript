//1.
let person = {name: "John Smith",
                        age: 43,
                        sex: "Male",
                        complexion: "Dark-Skinned",
                        stateOfOrigin: "Lagos",
                        country: "Nigeria"
                    };

//2.

function getProperties(object) {
    let keys = Object.keys(object);
    let values = Object.values(object);
    
    for (let index = 0; index < keys.length; index++) {
        console.log(keys[index] + ": " + values[index] + "\n");
    }
}

const car = { make: "Toyota", model: "Camry", year: 2021 };
getProperties(car);

//3.
const laptop = {brand: "Dell", price: 1200};

laptop.color = "blue";
console.log(laptop);

//4.
const phone = {brand: "Apple", price: 999};

phone.price = 1500;

console.log(phone);

//5.

const user = { firstName: "Bayo", 
                             lastName: "Oriola", 
                             fullName : function() {
                             console.log("Full name of user is : " + user.firstName + " " + user.lastName);
                             }
                            }
user.fullName();

//6. 
const bio = { firstName: "John",
                             lastName: "Doe",
                             age: 25
                            }
function properties(object) {
    console.log("First Name: " + object.firstName + ", Last Name: " + object.lastName + ", Age: " + object.age);
}
properties(bio);

//7.

const book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925};

const {title, author} = book;

console.log(title + " by " + author); 

//8.

const profile = {name: "Sam", age: 40, profession: "Engineer"};
const { name, age } = profile;
console.log(name);
console.log(age);

