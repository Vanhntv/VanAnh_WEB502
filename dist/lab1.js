// chu vi và diện tích hình chữ nhật
function rectangle(w, h) {
    return {
        chuVi: (w + h) * 2,
        dienTich: w * h,
    };
}
console.log(rectangle(5, 10));
// tổng nhiều số (rest parameter)
function sum() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var n = nums_1[_a];
        total += n;
    }
    return total;
}
console.log(sum(1, 2, 3, 4));
// số lần xuất hiện của 1 ký tự
function countChar(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countChar("typescript", "t"));
// kiểm tra số nguyên tố
function isPrime(n) {
    if (n < 2)
        return false;
    for (var i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
console.log(isPrime(7));
