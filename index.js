const cesar = (letter, shift) => {
  if (shift < 0) {
    return cesar(letter, shift + 26);
  }

  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let index = letters.indexOf(letter) + 1;

  if (index + shift >= 26) {
    if ((index + shift) % 26 === 0) {
      return "z";
    } else {
      const reminder = (index + shift) % 26;
      return letters[reminder - 1];
    }
  } else {
    return letters[shift + index + 1];
  }
};

const cesarWord = (word, shift) => {
  let newWord = word.split("");
  console.log(newWord);
  const cesarChiper = newWord.map((word) => {
    word = word.toLowerCase();
    if (word.match(/[a-z]/gi)) {
      return cesar(word, shift);
    } else {
      return " ";
    }
  });
  console.log(cesarChiper.join(""));
};

cesarWord("hello world", -29);
