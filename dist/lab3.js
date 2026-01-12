var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// tính dtb
var diemTB = function (a, b, c) {
    return (a + b + c) / 3;
};
console.log(diemTB(8, 9, 10));
console.log(diemTB(5, 6, 7));
var isEven = function (n) {
    return n % 2 === 0;
};
console.log(isEven(10));
console.log(isEven(7));
// tạo thông tin người dùng
var createUser = function (name, age, role) {
    if (role === void 0) { role = "User"; }
    return { name: name, age: age, role: role };
};
console.log(createUser("Vanh", 20, "Admin"));
console.log(createUser("Bình"));
var addProducts = function (list) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    return __spreadArray(__spreadArray([], list, true), items, true);
};
var products = [
    { name: "Áo", price: 100 },
    { name: "Quần", price: 200 },
];
var newList = addProducts(products, { name: "Giày", price: 300 }, { name: "Mũ", price: 50 });
console.log(newList);
