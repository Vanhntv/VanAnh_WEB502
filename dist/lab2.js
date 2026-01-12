//? Tạo type Product có các trường sau:
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// name: string
// price: number
// sale: boolean
// rate: enum {low : 'Thấp', medium: 'Trung bình', hight : 'Cao'}
// Tạo mảng listProducts có các phần tử có kiểu Product
var Rate;
(function (Rate) {
    Rate["low"] = "Th\u1EA5p";
    Rate["medium"] = "Trung b\u00ECnh";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));
var listProducts = [
    { name: "Áo", price: 4, sale: true, rate: Rate.low },
    { name: "Quần", price: 6, sale: false, rate: Rate.medium },
    { name: "Giày", price: 10, sale: true, rate: Rate.hight },
    { name: "Mũ", price: 3, sale: true, rate: Rate.medium },
    { name: "Túi", price: 8, sale: false, rate: Rate.hight },
];
// Nhập ít nhất 5 phần tử
// Viết hàm thêm mới 1 phần tử vào mảng listProducts có key = description, có giá trị = 'Tốt' nếu price > 5, 'Bình thường' nếu price <=5 (sử dụng map)
var productsDescription = listProducts.map(function (products) { return (__assign(__assign({}, products), { description: products.price > 5 ? "Tốt" : "Bình thường" })); });
console.log(productsDescription);
// Viết hàm hiển thị danh sách sản phẩm: (Tên sản phẩm, giá bán, trạng thái sale,Đánh giá) (Sử dụng forEach)
listProducts.forEach(function (p) {
    console.log("T\u00EAn: ".concat(p.name, ", Gi\u00E1: ").concat(p.price, ", Sale: ").concat(p.sale, ", \u0110\u00E1nh gi\u00E1: ").concat(p.rate));
});
// Viết hàm tính tổng giá bán sản phẩm (sử dụng reduce)
var totalPrice = listProducts.reduce(function (sum, products) { return sum + products.price; }, 0);
console.log("Tổng giá:", totalPrice);
// Viết hàm lọc những sản phẩm đang Sale và đánh giá từ Trung bình trở lên (Sử dụng filter)
var saleProducts = listProducts.filter(function (p) { return p.sale && (p.rate === Rate.medium || p.rate === Rate.hight); });
console.log(saleProducts);
