function calculateResult() {
  var score = 0;

  // Loop through each question to accumulate the score
  for(var i = 1; i <= 5; i++) {
    score += parseInt(document.getElementById('question' + i).value, 10);
  }

  // Determine the color code based on the score
  var colorCode = '';
  var color = '';
  var resultText = '';
  if (score <= 0) {
    colorCode = 'green';
    color = '#dff0d8';
    resultText = 'Well within the bounds of academic integrity.';
  } else if (score <= 3) {
    colorCode = 'yellow';
    color = '#fcf8e3';
    resultText = 'Be cautious. Make sure you openly cite your AI use.';
  } else if (score <= 6) {
    colorCode = 'orange';
    color = '#f2dede';
    resultText = 'Potential over-reliance on AI. Consider revising.';
  } else {
    colorCode = 'red';
    color = '#d9534f';
    resultText = 'Your academic integrity may be at risk. Reassess your work.';
  }

  // Apply the color and change the text
  document.body.style.backgroundColor = color; // Change the background of the body
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = `<strong>Your academic integrity level is ${colorCode.toUpperCase()}.</strong><br>${resultText}`;
  resultElement.style.color = '#333'; // A dark gray, almost black, which stands out well
  resultElement.style.textShadow = '0px 0px 3px #fff'; // Adds a white halo effect around the text
  resultElement.style.fontSize = '1.5em'; // Increase the font size
  resultElement.style.padding = '20px'; // Ensure padding for visibility
  resultElement.style.borderRadius = '4px'; // Rounded corners for the result box
}

document.getElementById('question1').addEventListener('change', function() {
  // Check if the user selected an option other than the default
  if(this.value != "0") {
    document.getElementById('question2Container').classList.remove('hidden');
  }
});

document.getElementById('question2').addEventListener('change', function() {
  // Check if the user selected an option other than the default
  if(this.value != "0") {
    document.getElementById('question3Container').classList.remove('hidden');
  }
});

document.getElementById('question3').addEventListener('change', function() {
  // Check if the user selected an option other than the default
  if(this.value != "0") {
    document.getElementById('question4Container').classList.remove('hidden');
  }
});

document.getElementById('question4').addEventListener('change', function() {
  // Check if the user selected an option other than the default
  if(this.value != "0") {
    document.getElementById('question5Container').classList.remove('hidden');
  }
});