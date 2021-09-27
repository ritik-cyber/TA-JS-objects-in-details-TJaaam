function usingData(title, option, correctAnswer) {
  let data = {};
  data.title = title;
  data.option = option;
  data.correctAnswer = correctAnswer;
}

let dataMethod = {
  isAnswerCorrect: function (correctAnswer) {
    if (correctAnswer === correctAnswer) {
      return true;
    }
  },
  getAnswerCorrect: function () {
    return getAnswerCorrect;
  },
};
