const countWords = (google, swodish, text) => {
  const googleCount = {};
  const swodishCount = {};

  const textWords = text.toLowerCase().match(/\b\w+\b/g);

  google.forEach((word) => {
    googleCount[word] = 0;
    textWords.forEach((textWord) => {
      if (word === textWord) {
        googleCount[word]++;
      }
    });
  });

  swodish.forEach((word) => {
    swodishCount[word] = 0;
    textWords.forEach((textWord) => {
      if (word === textWord) {
        swodishCount[word]++;
      }
    });
  });

  return { swodishCount, googleCount };
};

export default countWords;
