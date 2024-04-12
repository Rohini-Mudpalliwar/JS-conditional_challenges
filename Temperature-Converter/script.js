function convertToFahrenheit() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("fahrenheit");
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitOutput.value = fahrenheit.toFixed(2);
  }
  
  function convertToCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusOutput = document.getElementById("celsius");
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
    celsiusOutput.value = celsius.toFixed(2);
  }
  