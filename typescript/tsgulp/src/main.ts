interface Person {
  firstName: string,
  lastName: string,
  age: number,
  favoriteColor: string,
  favoriteNumber: number,
  favoriteAnimal: string,
  likesDarkChocolate: boolean,
  say(): string
}

let submit = document.getElementById("submit");
submit.addEventListener("click", returnInfo);

function returnInfo() {

  let firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    localStorage.setItem("firstName", firstName);
  let finalFirstName = localStorage.getItem("firstName");

  let lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    localStorage.setItem("lastName", lastName);
  let finalLastName = localStorage.getItem("lastName");

  let age = (<HTMLInputElement>document.getElementById("age")).value;
    localStorage.setItem("age", age);
  let finalAge = localStorage.getItem("age");

  let favoriteColor = (<HTMLInputElement>document.getElementById("favoriteColor")).value;
    localStorage.setItem("favoriteColor", favoriteColor);
  let finalFavoriteColor = localStorage.getItem("favoriteColor");

  let favoriteNumber = (<HTMLInputElement>document.getElementById("favoriteNumber")).value;
    localStorage.setItem("favoriteNumber", favoriteNumber);
  let finalFavoriteNumber = localStorage.getItem("favoriteNumber");

  let favoriteAnimal = (<HTMLInputElement>document.getElementById("favoriteAnimal")).value;
    localStorage.setItem("favoriteAnimal", favoriteAnimal);
  let finalFavoriteAnimal = localStorage.getItem("favoriteAnimal");

  let likesDarkChocolate = "";
  if ((<HTMLInputElement>document.getElementById("yes")).checked) {
    likesDarkChocolate = (<HTMLInputElement>document.getElementById("yes")).value;
  }
  else if ((<HTMLInputElement>document.getElementById("no")).checked) {
    likesDarkChocolate = (<HTMLInputElement>document.getElementById("no")).value;
  }
  localStorage.setItem("likesDarkChocolate", likesDarkChocolate);
  let finalLikesDarkChocolate = localStorage.getItem("likesDarkChocolate");

  let person = {
    firstName: finalFirstName,
    lastName: finalLastName,
    age: parseInt(finalAge),
    favoriteColor: finalFavoriteColor,
    favoriteNumber: parseInt(finalFavoriteNumber),
    favoriteAnimal: finalFavoriteAnimal,
    likesDarkChocolate: JSON.parse(finalLikesDarkChocolate),
    say: function () {
       return "My name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old. My favorite color is " + this.favoriteColor + ", my favorite number is " + this.favoriteNumber + ", my favorite animal is the " + this.favoriteAnimal + " and it is " + this.likesDarkChocolate + " that I like dark chocolate."
    }
  }


    document.getElementById("index").innerHTML = person.say();
}




///////




interface Calculator {
  firstNumber: number,
  operator: string,
  secondNumber: number,
  calculate(): string
}

let answer = document.getElementById("answer");
answer.addEventListener("click", calculate);

function calculate() {
  let firstNumber = (<HTMLInputElement>document.getElementById("firstNumber")).value;
    localStorage.setItem("firstNumber", firstNumber);
  let finalFirstNumber = localStorage.getItem("firstNumber");

  let operator = (<HTMLInputElement>document.getElementById("operator")).value;;
    localStorage.setItem("operator", operator);
  let finalOperator = localStorage.getItem("operator");

  let secondNumber = (<HTMLInputElement>document.getElementById("secondNumber")).value;
    localStorage.setItem("secondNumber", secondNumber);
  let finalSecondNumber = localStorage.getItem("secondNumber");

  let calculation = {
    firstNumber: parseInt(finalFirstNumber),
    operator: finalOperator,
    secondNumber: parseInt(finalSecondNumber),
    calculate: function() {

      if(operator == "add") {
        return this.firstNumber + this.secondNumber;
      }
      else if(operator == "subtract") {
        return this.firstNumber - this.secondNumber;
      }
      else if(operator == "multiply") {
        return this.firstNumber * this.secondNumber;
      }
      else if(operator == "divide") {
        return this.firstNumber / this.secondNumber;
      }
    }
  }

  alert(calculation.calculate());



}
