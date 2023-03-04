/*
Question 1
Mutating array method is used to modify the original array directly. They change the object after the method is used
Example: push(), pop(), shift(), unshift(), splice().

Non-mutating array method is used to return a new array without modifying the original array. They do not change the object after the methos is used.
Example: slice(), concat(), map(), filter(), reduce().
*/

//Question 2
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
//1
languages.push('Kotlin');
//2
languages.splice(languages.indexOf('Ruby') + 1,0, 'Java');
//3
languages.shift();
//4
languages.unshift('Scala', 'Swift');
//5
languages.splice(languages.indexOf('PHP'), 1, 'Go', 'Rust');

console.log(languages);

//Question 3
/* the answer is ["apple", "mango", "orange"]*/
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

    console.log(changeFruit(fruit));

//Question 4
function max(num) {
  let maxVal = num[0];
  for (let i = 1; i < num.length; i++) {
    if (num[i] > maxVal) {
      maxVal = num[i];
    }
  }
  return maxVal;
}

console.log(max([4, 5, 10, -2])); // Output: 10

//Question 5
function valTimesIndex(num) {
  return num.map((val, index) => val * index);
}

valTimesIndex([1,2,3]); // Answer [0,2,6]
valTimesIndex([5,10,15]); // Answer [0,10,30]



