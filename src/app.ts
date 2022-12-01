// lesson 1
const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});

// lesson 2
// let age: number;
// age = 50;
// let naMe: string;
// naMe = "Max";
// let toggle: boolean;
// toggle = true;
// let empty: null;
// empty = null;
// let notInitialize: undefined;
// notInitialize = undefined;
// let callback = (a: number) => number;

// callback = (a) => {
//   return 100 + a;
// };
// console.log(callback(50));
//
// let anything: any;
// anything = -20;
// anything = "Text";
// anything = {};
// //
// let some: unknown;
// some = "Text";

// let str: string;

// if (typeof some === "string") {
//   str = some;
// }

//
// let person: [string, number];
// person = ["Max", 21];
//
// Опишите enum условие следующее,
//  он должен отображать статус загрузки.Загружается(LOADING) и загружена(READY).
// enum Toggle {
//   LOADING,
//   READY,
// }

// const service = {
//   status: Toggle.LOADING,
// };
// if (service.status === Toggle.LOADING) {
//   console.log("LOADING");
// } else {
//   console.log("READY");
// }

//
// let numAndString: number | string;
// numAndString = 1;
// numAndString = "be";
//  Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
// let isEnable: "disable" | "enable";
//
// function showMessage(message: string): void {
//   console.log(message);
// }
// showMessage("bebebe");

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }
// console.log(calc(1, 1));

// function customError(): never {
//   throw new Error("Error");
// }

// console.log(customError());
//
// type Pages = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: "open" | "close";
//   details?: {
//     createAt: Date;
//     updateAt: Date;
//   };
// };

// const page1 = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: "2021-01-01",
//     updateAt: "2021-05-01",
//   },
// };

// const page2 = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };

// lesson 3
