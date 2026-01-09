function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;

console.log(add(2, 3));
console.log(multiply(4, 5));

function logMessage(message: string): void {
  console.log(message);
}

function greetUser(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

console.log(greetUser("John"));
console.log(greetUser("Jane", "Hi"));

function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6, 7));

function describePerson(name: string, age?: number): string {
  if (age) {
    return `${name} is ${age} years old.`;
  }
  return `${name} has no age specified.`;
}

console.log(describePerson("John")); // Kết quả: John has no age specified.
console.log(describePerson("Jane", 25)); // Kết quả: Jane is 25 years old.

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5]
