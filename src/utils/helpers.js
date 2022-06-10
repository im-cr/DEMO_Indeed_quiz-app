export const answerShuffle = (question) => {
  const unshuffledAnswer = [...question.answers];

  return unshuffledAnswer
    .map((answer) => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
};

export const clearInputs = () => {
  Array.from(
    document.querySelectorAll('input[type="radio"]:checked'),
    (input) => (input.checked = false)
  );
};

export const getFullDate = () => {
  let date = new Date();
  let day = date.getUTCDate();
  let month = date.getUTCMonth();
  let year = date.getUTCFullYear();
  let fullDate = `${day}/${month}/${year}`;

  return fullDate;
}

const imgList = {
  pass: [
    "https://media.giphy.com/media/kyLYXonQYYfwYDIeZl/giphy.gif",
    "https://media.giphy.com/media/35HTaxVJWzp2QOShct/giphy.gif",
    "https://media.giphy.com/media/YTbZzCkRQCEJa/giphy.gif",
    "https://media.giphy.com/media/aurUBBayxC55m/giphy.gif",
  ],
  fail: [
    "https://media.giphy.com/media/W63ZJmQ4qdblTM9Wbi/giphy.gif",
    "https://media.giphy.com/media/XAZtFzspXsJbhWeucw/giphy.gif",
    "https://media.giphy.com/media/1fXcl6MEoOQvbOw3ZS/giphy.gif",
    "https://media.giphy.com/media/WV3hc7olZn80GobYKF/giphy.gif",
  ],
};

export const randomImg = (score, size) => {
  let status = (score / size) * 100;
  let max = 50 > status ? imgList.fail.length : imgList.pass.length;
  let ranNum = Math.floor(Math.random() * max);

  return 50 > status ? imgList.fail[ranNum] : imgList.pass[ranNum];
};
