const sentence = "hello there from lighthouse labs, my name is Carlo Tanjuaquio \n";

let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    if (char < char.length) {
    } process.stdout.write(char);
  }, delay);
  delay += 50;
};
