const checkForm = () => {
  const inputName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("pass").value;

  if (inputName === "" || email === "" || phone === "" || password === "") {
    alert("Fill in all fields");
    return false;
  }

  // Check name format
  let namePattern = /^[a-zA-Z]{3,}$/;
  if (!namePattern.test(inputName)) {
    alert(
      "Name should be atleast 3 characters long and cannot contain numbers"
    );
    return false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid e-mail address");
    return false;
  }

  let phonePattern = /^[6-9]{1}[0-9]{9}/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number");
    return false;
  }

  if (password.length < 6) {
    alert("Password should be minimum 6 characters");
    return false;
  }

  //Successful submission
  alert("Registered Successfully !");

  return true;
};
