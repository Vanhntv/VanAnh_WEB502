// console.log("Van Anh");
// let myName: string = "anhntv";
// const age: number = 19;
// const isMarried: boolean = true;
// console.log(myName);
// console.log(age);
// console.log(isMarried);

// let count = 10;
// console.log(count);
// // count = "string";

// let products: { id: number; title: string; price: number } = {
//   id: 1,
//   title: "Iphone 14",
//   price: 2000,
//   //   isActive: true,
// };
// console.log(products);

// let numbers: number[] = [1, 2, 3, 4];
// console.log(numbers);
// let names: string[] = ["Alice", "Bob", "Charlie"];
// console.log(names);

// let data: any = 10;
// console.log(data);

// let result: number | string;
// result = 42; // Hợp lệ
// result = "Success"; // Hợp lệ
// // result = true; // Lỗi

// let status: "success" | "error" | "loading";
// status = "success"; // Hợp lệ
// // status = "failed"; // Lỗi

// let input: unknown = 42;
// if (typeof input === "number") {
//   let num: number = input; // Hợp lệ sau khi kiểm tra kiểu
// }

function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;
