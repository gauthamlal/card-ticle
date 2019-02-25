const shortenText = text => {
  let shortVersion = "";
  let word = "";
  for (let i = 0; i <= text.length; i++) {
    word += text.charAt(i);
    if (text.charAt(i) === " ") {
      shortVersion += word;
      word = "";
    }
    if (i === 100) {
      shortVersion += "...";
      return shortVersion;
    }
  }
  return shortVersion;
};

export default shortenText;
