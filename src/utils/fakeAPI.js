function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const fetchAPI = () => {
  let result = [];
  let random = getRandomInt(1, 15);

  for (let i = random; i <= random + 5; i++) {
    result.push(i + ':00');
  }

  return result;
};

const submitAPI = formData => true;

export {
  fetchAPI,
  submitAPI
};
