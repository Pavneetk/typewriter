const sentence = "hello there from lighthouse labs";
let modifier = 50;
let delay = 1000;
for (const char of sentence) {
  
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, delay)
  delay += modifier;
}
setTimeout(() => {
  
  console.log('');
}, delay)
