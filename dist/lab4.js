// 1.
var student = {
    id: 1,
    name: "Vanh",
    score: 9,
};
console.log(student);
// 2.
var user = {
    id: 1,
    email: "Vanh@gmail.com",
};
console.log(user);
var add = function (a, b) {
    return a + b;
};
console.log(add(2, 6));
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(5, 10));
function logStatus(status) {
    if (status === "loading")
        console.log("dang tai");
    if (status === "success")
        console.log("thanh cong");
    if (status === "error")
        console.log("loi");
}
logStatus("loading");
