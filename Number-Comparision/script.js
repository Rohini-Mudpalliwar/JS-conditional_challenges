function compareNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").innerText = "Please enter valid numbers";
    } else if (num1 === num2) {
      document.getElementById("result").innerText = "The numbers are equal";
    } else if (num1 > num2) {
      document.getElementById("result").innerText = "The first number is greater";
    } else {
      document.getElementById("result").innerText = "The second number is greater";
    }
  }
  