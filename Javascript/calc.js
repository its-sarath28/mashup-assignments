const calculate = () => {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const result = document.getElementById("result");

  // if (num1 == "" || num2 == "" || operator == "Select operator") {
  //   alert("Please fill all fields");
  //   return;
  // }

  if (isNaN(num1) || isNaN(num2) || operator == "Select operator") {
    alert("Please fill fields with valid inputs");
    return;
  }

  // if (operator == "/" && (num2 == 0 || num2 == "0")) {
  //   alert("Division by zero is not allowed");
  //   return;
  // }

  switch (operator) {
    case "+":
      result.value = num1 + num2;
      break;
    case "-":
      result.value = num1 - num2;
      break;
    case "*":
      result.value = num1 * num2;
      break;
    case "/":
      if (num2 == 0) {
        alert("Division by zero is not allowed");
        return;
      }
      result.value = num1 / num2;
      break;
    default:
      alert("Invalid operator");
  }
};

const clearFields = () => {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").value = "";
};
