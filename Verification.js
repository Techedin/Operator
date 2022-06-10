function Verification() {
  var OpName = document.getElementById("OpName").value;
  var BadgeNumber = document.getElementById("BadgeNumber").value;

  if (OpName.length > 20 || OpName.length < 4) {
    document.getElementById("loginStatus").innerHTML =
      "Operator name has invalid number of characters! Please shorten to below 20 characters";
  } else if (BadgeNumber < 100 || BadgeNumber > 999) {
    alert("Incorrect badge number format.");
  } else {
    alert(
      "Welcome Operator " +
        OpName +
        ". Badge number " +
        BadgeNumber +
        ". Have a great day operating"
    );
  }
}
