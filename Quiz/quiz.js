function calculateScore() {
    const answers = ['a', 'b', 'c'];
    let score = 0;
  
    
    const selectedOption1 = document.querySelector('input[name="q1"]:checked');
    const selectedOption2 = document.querySelector('input[name="q2"]:checked');
    const selectedOption3 = document.querySelector('input[name="q3"]:checked');
  
    if (selectedOption1 && selectedOption1.value === answers[1]) {
      score++;
    }
  
    if (selectedOption2 && selectedOption2.value === answers[1]) {
      score++;
    }
  
    if (selectedOption3 && selectedOption3.value === answers[2]) {
      score++;
    }
  
    
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');
    const feedbackElement = document.getElementById('feedback');
  
    scoreElement.textContent = `Score: ${score} / ${answers.length}`;
  
    if (score === answers.length) {
      feedbackElement.textContent = 'Congratulations! You got all the answers correct.';
    } else {
      feedbackElement.textContent = 'Nice try! Review the questions and try again.';
    }
  
    resultContainer.style.display = 'block';
  }
  
