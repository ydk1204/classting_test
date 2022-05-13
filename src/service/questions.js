class Questions {
  constructor() {
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async loadQuestions() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=27&type=multiple", this.requestOptions);
    const res = await response.json();
    return res.results;
  }
}

export default Questions;