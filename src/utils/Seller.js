export function random() {
  let min = 1;
  let max = 1000000;
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}
