const input = document.getElementById("input");

function revereString(str) {
  return str.split("").reverse().join("");
}

function checkPalindrome() {
  const value = input.value;
  const reverse = revereString(value);
  if (value === reverse) {
    document.getElementById("result").textContent = "Palindrome";
  } else {
    document.getElementById("result").textContent = "Not a Palindrome";
  }
  input.value = "";
}
