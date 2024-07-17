export function generateArithmeticCaptcha() {
    const operators = ['+', '-', '*'];
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    let question = `${num1} ${operator} ${num2}`;
    let answer;
  
    switch (operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '*':
        answer = num1 * num2;
        break;
    }
  
    return { question, answer: answer.toString() };
  }
  
  
  