var submit = document.getElementById("submit");
submit.addEventListener("click", returnInfo);
function returnInfo() {
    var firstName = document.getElementById("firstName").value;
    localStorage.setItem("firstName", firstName);
    var finalFirstName = localStorage.getItem("firstName");
    var lastName = document.getElementById("lastName").value;
    localStorage.setItem("lastName", lastName);
    var finalLastName = localStorage.getItem("lastName");
    var age = document.getElementById("age").value;
    localStorage.setItem("age", age);
    var finalAge = localStorage.getItem("age");
    var favoriteColor = document.getElementById("favoriteColor").value;
    localStorage.setItem("favoriteColor", favoriteColor);
    var finalFavoriteColor = localStorage.getItem("favoriteColor");
    var favoriteNumber = document.getElementById("favoriteNumber").value;
    localStorage.setItem("favoriteNumber", favoriteNumber);
    var finalFavoriteNumber = localStorage.getItem("favoriteNumber");
    var favoriteAnimal = document.getElementById("favoriteAnimal").value;
    localStorage.setItem("favoriteAnimal", favoriteAnimal);
    var finalFavoriteAnimal = localStorage.getItem("favoriteAnimal");
    var likesDarkChocolate = "";
    if (document.getElementById("yes").checked) {
        likesDarkChocolate = document.getElementById("yes").value;
    }
    else if (document.getElementById("no").checked) {
        likesDarkChocolate = document.getElementById("no").value;
    }
    localStorage.setItem("likesDarkChocolate", likesDarkChocolate);
    var finalLikesDarkChocolate = localStorage.getItem("likesDarkChocolate");
    var person = {
        firstName: finalFirstName,
        lastName: finalLastName,
        age: parseInt(finalAge),
        favoriteColor: finalFavoriteColor,
        favoriteNumber: parseInt(finalFavoriteNumber),
        favoriteAnimal: finalFavoriteAnimal,
        likesDarkChocolate: JSON.parse(finalLikesDarkChocolate),
        say: function () {
            return "My name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old. My favorite color is " + this.favoriteColor + ", my favorite number is " + this.favoriteNumber + ", my favorite animal is the " + this.favoriteAnimal + " and it is " + this.likesDarkChocolate + " that I like dark chocolate.";
        }
    };
    document.getElementById("index").innerHTML = person.say();
}
var answer = document.getElementById("answer");
answer.addEventListener("click", calculate);
function calculate() {
    var firstNumber = document.getElementById("firstNumber").value;
    localStorage.setItem("firstNumber", firstNumber);
    var finalFirstNumber = localStorage.getItem("firstNumber");
    var operator = document.getElementById("operator").value;
    ;
    localStorage.setItem("operator", operator);
    var finalOperator = localStorage.getItem("operator");
    var secondNumber = document.getElementById("secondNumber").value;
    localStorage.setItem("secondNumber", secondNumber);
    var finalSecondNumber = localStorage.getItem("secondNumber");
    var calculation = {
        firstNumber: parseInt(finalFirstNumber),
        operator: finalOperator,
        secondNumber: parseInt(finalSecondNumber),
        calculate: function () {
            if (operator == "add") {
                return this.firstNumber + this.secondNumber;
            }
            else if (operator == "subtract") {
                return this.firstNumber - this.secondNumber;
            }
            else if (operator == "multiply") {
                return this.firstNumber * this.secondNumber;
            }
            else if (operator == "divide") {
                return this.firstNumber / this.secondNumber;
            }
        }
    };
    alert(calculation.calculate());
    document.getElementById("answer").innerHTML = calculation.calculate();
}
