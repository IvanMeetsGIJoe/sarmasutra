/**********************************************************************************
/*                                                                                */
/*        JavaScript program za obavljanje osnovnih aritmetičkih operacija        */
/*        AUTOR: IVAN MEETSGIJOE    DATUM: 15.01.2020.                            */
/*                                                                                */
/*        Operacije: sabiranje, oduzimanje, množenje, dijeljenje                  */
/*        Primjer jednog korišćenja programa:                                     */
/*        - korisnik unosi 3, zatim +, te konačno 10                              */
/*        - program emituje rezultat 13 prezentovanjem preko HTML-a               */
/*                                                                                */
/**********************************************************************************/

document.getElementById("button").addEventListener("click", function () {
  let num_A;
  let op;
  let num_B;
  let result;

  (() => {
    
     if (((num_A = prompt("Enter the first number:").trim()) || parseInt(num_A) === 0) && !isNaN(Number(num_A))) { // prozorcic nije Cancel-ovan pa nije null && (broj uklj 0)
      document.getElementById("txtboxLCD").value = " "; // clear the HTML input element
      showOnLCD(num_A);
      if ( (op = prompt("Enter the operator (+ - * /):").trim()) == "+" || op === "-" || op === "*" || op === "/") {
        showOnLCD(op);
        if ( ((num_B = prompt("Enter the second number:").trim()) || parseInt(num_B) === 0) && !isNaN(Number(num_B))) { // user didn't cancel so not null && (number incl 0)
          showOnLCD(num_B);
        } else {
          alert("That B no number! All your Base are Belong to us.\nSee you soon, BaBoon!");
          return;
        }
      } else if (!op) { // user has cancelled the modal window, as manifested by op being null returned by the cancelled prompt() 
        return;
      } else {
        alert("Nice try, but no cigar. Maybe next time try + - * /");
        return;
      }
    } else {
      alert("That wod no number, A-ole! We're done ere.");
      return;
    }
    //alert("Awesome Work, Great Job! Now just let Me do the math, OK? OK.");
    switch (op) {
      case "+":
        try {
          result = addAB(num_A, num_B);
          showOnLCD(" =  " + result);
          break;
        } catch (someErrorObject) {
          showError(someErrorObject);
        }

      case "-":
        try {
          result = subtractAB(num_A, num_B);
          showOnLCD(" =  " + result);
          break;
        } catch (someErrorObject) {
          showError(someErrorObject);
        }

      case "*":
        try {
          result = multiplyAB(num_A, num_B);
          showOnLCD(" =  " + result);
          break;
        } catch (someErrorObject) {
          showError(someErrorObject);
        }

      case "/":
        try {
          result = divideAB(num_A, num_B);
          showOnLCD(" =  " + result);
          break;
        } catch (someErrorObject) {
          showError(someErrorObject);
        }
    }
  })();

  function showOnLCD(showable) {
    //alert("Result: " + showable + "\n\nBye bye, butterfly.");
    document.getElementById("txtboxLCD").value += showable + " ";
  }

  function showError(anErrorObject) {
    console.log("Error name: " + anErrorObject.name);
    console.log("Error message: " + anErrorObject.message);
    alert("Yo, dude!\n" + anErrorObject.message + " Comprende?");
  }
});
