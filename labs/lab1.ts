// chu vi và diện tích hình chữ nhật
function rectangle(w: number, h: number) {
  return {
    chuVi: (w + h) * 2,
    dienTich: w * h,
  };
}
console.log(rectangle(5, 10));

// tổng nhiều số (rest parameter)
function sum(...nums: number[]): number {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}
console.log(sum(1, 2, 3, 4));

// số lần xuất hiện của 1 ký tự
function countChar(str: string, char: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(countChar("typescript", "t"));

// kiểm tra số nguyên tố
function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));
