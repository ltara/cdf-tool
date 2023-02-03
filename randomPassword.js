function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min
}

function randomPassword(len) {
  let result = ''
  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(generateRandomNumber(33, 126))
  }
  return result
}

console.log(randomPassword(16))
