// #1 箭頭函式的縮寫
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filterArr = arr.filter((item) => item % 2);
// console.log(filterArr);

// #2 This 綁定的差異
// #2-1 活用觀念，將內層的改為箭頭
// 箭頭函式沒有自已的 this，它的 this 是外層的 this
// var name = "全域";
// const person = {
//   name: "小明",
//   callName: function () {
//     console.log("1", this.name); // 1 小明
//     setTimeout(function () {
//       console.log("2", this.name); // 2 全域，callback function 的 this 為 window(simple call)
//       console.log("3", this); // 3 window, 因為是 simple call
//     }, 10);
//   },
// };

// const person = {
//   name: "小明",
//   callName: function () {
//     console.log("1", this.name); // 1 小明
//     setTimeout(() => {
//       console.log("2", this.name); // 2 小明，因為是 arrow function
//       console.log("3", this); // 3 小明，因為是 arrow function
//     }, 10);
//   },
// };
// person.callName();

// #3 陷阱
// #3-1
// var name = "全域";
// const person = {
//   name: "小明",
//   callName: () => {
//     console.log(this.name); // 請尋找箭頭所在的作用域為何？
//   },
// };
// person.callName();

// #3-2
// var name1 = "全域";
// const person = {
//   name1: "小明",
//   callMe() {
//     const callName = () => {
//       console.log(this.name1); // 請尋找箭頭所在的作用域為何？
//     };
//     callName();
//   },
// };
// person.callMe();

// #4 實戰手法
// var someone = "全域";
// function callSomeone() {
//   console.log(this.someone);
// }

// var obj4 = {
//   someone: "物件 4",
//   fn() {
//     const vm = this; // vm 在 Vue 中意指 ViewModel

//     setTimeout(() => {
//       console.log(this.someone);
//     });
//   },
// };

// obj4.fn();
