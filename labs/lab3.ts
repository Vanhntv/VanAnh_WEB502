// tính dtb
const diemTB = (a: number, b: number, c: number): number => {
  return (a + b + c) / 3;
};
console.log(diemTB(8, 9, 10));
console.log(diemTB(5, 6, 7));

// kiểm tra số chẵn lẻ
type check = (n: number) => boolean;

const isEven: check = (n) => {
  return n % 2 === 0;
};
console.log(isEven(10));
console.log(isEven(7));

// tạo thông tin người dùng
const createUser = (name: string, age?: number, role: string = "User") => {
  return { name, age, role };
};
console.log(createUser("Vanh", 20, "Admin"));
console.log(createUser("Bình"));

// danh sách sản phẩm
type Product = { name: string; price: number };

const addProducts = (list: Product[], ...items: Product[]) => {
  return [...list, ...items];
};

const products: Product[] = [
  { name: "Áo", price: 100 },
  { name: "Quần", price: 200 },
];

const newList = addProducts(
  products,
  { name: "Giày", price: 300 },
  { name: "Mũ", price: 50 }
);

console.log(newList);
