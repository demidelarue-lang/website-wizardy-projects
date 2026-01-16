function check(selectedOption, correctAnswer, resultld) {
  var resultElement = document.getElementById(resultld);
  if (selectedOption === correctAnswer) {
    resultElement.textContent = "Correct! Great work!";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = "Oops! That's Wrong, try again";
    resultElement.style.color = "red";
  }
}