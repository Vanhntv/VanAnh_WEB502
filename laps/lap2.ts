//? Tạo type Product có các trường sau:

// name: string
// price: number
// sale: boolean
// rate: enum {low : 'Thấp', medium: 'Trung bình', hight : 'Cao'}
// Tạo mảng listProducts có các phần tử có kiểu Product

enum Rate {
  low = "Thấp",
  medium = "Trung bình",
  hight = "Cao",
}

type Product = {
  name: string;
  price: number;
  sale: boolean;
  rate: Rate;
};

let listProducts: Product[] = [
  { name: "Áo", price: 4, sale: true, rate: Rate.low },
  { name: "Quần", price: 6, sale: false, rate: Rate.medium },
  { name: "Giày", price: 10, sale: true, rate: Rate.hight },
  { name: "Mũ", price: 3, sale: true, rate: Rate.medium },
  { name: "Túi", price: 8, sale: false, rate: Rate.hight },
];
// Nhập ít nhất 5 phần tử
// Viết hàm thêm mới 1 phần tử vào mảng listProducts có key = description, có giá trị = 'Tốt' nếu price > 5, 'Bình thường' nếu price <=5 (sử dụng map)
const productsDescription = listProducts.map((products) => ({
  ...products,
  description: products.price > 5 ? "Tốt" : "Bình thường",
}));
console.log(productsDescription);

// Viết hàm hiển thị danh sách sản phẩm: (Tên sản phẩm, giá bán, trạng thái sale,Đánh giá) (Sử dụng forEach)
listProducts.forEach((p) => {
  console.log(
    `Tên: ${p.name}, Giá: ${p.price}, Sale: ${p.sale}, Đánh giá: ${p.rate}`
  );
});

// Viết hàm tính tổng giá bán sản phẩm (sử dụng reduce)
const totalPrice = listProducts.reduce(
  (sum, products) => sum + products.price,
  0
);

console.log("Tổng giá:", totalPrice);

// Viết hàm lọc những sản phẩm đang Sale và đánh giá từ Trung bình trở lên (Sử dụng filter)
const saleProducts = listProducts.filter(
  (p) => p.sale && (p.rate === Rate.medium || p.rate === Rate.hight)
);

console.log(saleProducts);
