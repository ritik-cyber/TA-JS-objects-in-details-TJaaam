class Question {
  constructor(title, option, correctAnswer) {
    this.title = title;
    this.option = option;
    this.correctAnswer = correctAnswer;
  }
  isCorrectAnswer(answer) {
    if (answer === correctAnswer) {
      return true;
    }
  }
  getCorrectAnswer() {
    return this.correctAnswer;
  }
}
