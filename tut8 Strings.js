console.log("har\"".length)

const sentence = 'The quick brown fox jumps over the lazy dog.';

// const word = 'fox';

//this return true/false if the word is present in the sentence
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


var word = 'The';
console.log(`The word "${word}" ${sentence.startsWith(word) ? 'is' : 'is not'} in the sentence`);


var word = 'The';
console.log(`The word "${word}" ${sentence.endsWith(word) ? 'is' : 'is not'} in the sentence`);

//strings are immutable and can't be changed, whatever functions we use only returns the new string
// and doesn't changes the original string