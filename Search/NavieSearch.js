function navieSearch(message, findMessage) {
  let count = 0;
  for (let i = 0; i < message.length; i++) {
    for (let j = 0; j < findMessage.length; j++) {
      if (message[i + j] != findMessage[j]) break;
      if (findMessage.length - 1 === j) count++;
    }
  }
  return count;
}

const result = navieSearch("Hello world HellHello", "Hello");
console.log(result);

/*
  BIG O -> n log n 
 */
