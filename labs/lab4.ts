// 1.
const student = {
  id: 1,
  name: "Vanh",
  score: 9,
};
console.log(student);

// 2.
const user = {
  id: 1,
  email: "Vanh@gmail.com",
};
console.log(user);

// 3.
type Calculate = (a: number, b: number) => number;

const add: Calculate = (a, b) => {
  return a + b;
};
console.log(add(2, 6));

const multiply: Calculate = (a, b) => {
  return a * b;
};
console.log(multiply(5, 10));

// 4.
type Status = "loading" | "success" | "error";
function logStatus(status: Status) {
  if (status === "loading") console.log("dang tai");
  if (status === "success") console.log("thanh cong");
  if (status === "error") console.log("loi");
}
logStatus("loading");
