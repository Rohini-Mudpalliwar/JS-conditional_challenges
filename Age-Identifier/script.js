
function classifyAge() {
var age = parseInt(document.getElementById('age').value);
var result = document.getElementById('result');

if (isNaN(age) || age < 0) {
result.textContent = "Please enter a valid age.";
} else if (age < 13) {
result.textContent = "You are a child.";
} else if (age < 18) {
result.textContent = "You are a teenager.";
} else if (age < 65) {
result.textContent = "You are an adult.";
} else {
result.textContent = "You are a senior citizen.";
}
}
