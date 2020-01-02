// var fuilt =['chuoi','dau tay','dua hau','nho','mit','dao'];
// dem phan tu
//console.log(fuilt.length);

// đếm trừ một phần tử trong mảng
//console.log(fuilt.length-1);

// in ra phan tu 1
// console.log(fuilt[1]);

// console.log(fuilt[fuilt.length-1]);

// fuilt.push('sau rieng')
// console.log(fuilt);

// fuilt.pop();
// console.log(fuilt);

// fuilt.shift();
// console.log(fuilt);

// fuilt.unshift('xoai');
// console.log(fuilt);


/**  6 gia tri false
 * NaN
 * Null
 * underfine
 * string
 * 
*/


// var arr = []
// function run(object){
//     for(var key in object){
//         arr.push(key)
//         let newObject = object[key]

//         if(typeof(newObject) == 'object'){
//             run(newObject)
//         } else {
//             continue;
//         }
//     }

// }
// run(dragon)

// console.log(arr);

// var arr = []
// function run(object) {
//     for (var key in object) {
//         arr.push(key);
//         var newObject = object[key]
//         if(typeof(newObject)=='object'){
//             run(newObject)
//         }else{
//             continue;
//         }
//     }

// }
// run(dragon)




// if (true) {
//     console.log('step');
// }else {
//     console.log('step1');
// }


// for (let i = 0; i < 101; i += 2) {
//     console.log(i);
// }

// for (let i = 0; i < 101; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// function sum(array) {
//     var s =0
//     for(var i=0;i<array.length;i++){

//       s += array[i];
//     }
//     return s;
// }
// console.log(sum([1,2,3]));


// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */

// function sumMultiplyArray(a, b) {
//     function tich1(a) {
//         var p1 = 0
//         for (var i = 0; i < a.length; i++) {

//             p1 *= a[i];
//         }
//         return p1;
//     }
//     console.log(tich1([1, 2, 3]));
//     function tich2(b) {
//         var p2 = 0
//         for (var s = 0; s < b.length; s++) {

//             p2 *= b[s];
//         }
//         return p2
//     }
//     console.log(tich2([10, 20]));
// }
// console.log(sumMultiplyArray(tich1(a), tich2(b)));


// var ac = [1, 2,3]
// var bc = [10 ,20]


// function tich2(a, b) {
//     var p= 0
//     var o = 0
//     for (var i = 0; i < b.length; i++) {

//         for (var q = 0; q < a.length; q++) {   
//             p = b[i]*a[q]

//             o += p

//         }

//     }
//     return o;
// }
// console.log(tich2(ac, bc));

// var a = [1, 2, 3]
// var b = ['a', 'b', 'c']
// for (var s = 0; s < a.length; s++) {
//     for (var i = 0; i < b.length; i++) {
//         console.log(b[i]);
//     }
//     console.log(a[s]);
// }

/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
// function calculate(start, end) {
//     var p = 1
//     for (var i = start; i < end; i++) {
//         p = p * i
//     }
//     return p; 
// }
// console.log(calculate(2, 5));


// var sum = -1;
// 	for(var i = 0; i < 100 ; i++ ){
// 		var sum = i * 100
// 	}
//     console.log(i); //i=100
//     console.log(sum);//sum = 9900

// function creatAddStartWith(startNumber){
//     return function(step){
//         startNumber += step;
//         return startNumber;
//     }
// }

// var add = creatAddStartWith(8);

// add(3);
// add(2);	
// add(1);
// var result = add(0);
// console.log(result);
// console.log(creatAddStartWith(8));
// //result  = 14 giai thích



// function capitalName(){
//     this.name = this.name.toUpperCase();
//     return this
// }

// var person1 = {
// name: 'nam', birthDay: '1996-11-26'
// }
// var person2 = {
// name: 'hiep', birthDay: '1999-01-26'
// }

// // console.log(capitalName.call(person1));

// function formatBirthDay(){
//   var arr = this.birthDay.split("-")
//   this.birthDay = `${arr[2]}-${arr[1]}-${arr[0]}`
//   return this
// }

// console.log(formatBirthDay.call(person1));
// //đọc hiểu được lợi ích của call ,tương tự viết 1 hàm formatBirthDay theo định dạng DD - MM - YYYY áp dụng cho 2 person
// console.log(Math.min.apply(null,[4,8,9,3,4,7,2,-1]));



// function first(){
//     setTimeout( function(){
//       console.log('duy');
//     },5000);                  // call  back
//   }
//   function second(){
//     console.log(2);
//   }
//   first();
//   second();


/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

// function multiply(arr) {
//   var s = 1
//   for (var i of arr) {
//     s *=i
//   }
// return s
// }
// console.log(multiply([2, 3, 4]));

/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau, 
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

// var apartment = {
//   bedroom: {
//     area: 20,
//     bed: {
//       type: 'twin-bed',
//       price: 100
//     }
//   }
// };
// function getObjectKey(objHead) {
//   var arr = []
//   function getKeys(obj) {
//     for (let key in obj) {
//       arr.push(key)
//       if (typeof (obj[key]) == 'object') {
//         getKeys(obj[key])
//       } else {
//         continue;
//       }
//     }
//   }
//   getKeys(objHead)
//   return arr
// }

// getObjectKey(apartment)






// function Thresh(sum, callback) {
//   var s = 0
//   for (var i = 0; i < sum.length; i++) {
//     s += sum[i]
//   }
//   callback(s)
// }
// function showOut(sum) {
//   console.log(`sum cua mang la: ${sum}  `);
// }
// function showOut2(sum) {
//   setTimeout(function(){
//     console.log(`sum cua mang = ${sum}  `);
//   },3000)

// }
// Thresh([50, 50, 60, 70, 80, 90, 100], showOut)
// Thresh([50, 50, 60, 70, 80, 90, 100], showOut2)



/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */

// function sum(numbers) {
//   for(var i of numbers){

//   }
// }(




/** 
 B10: promise1 xử lý tác vụ 3s  cho ra kết quả là 2.
	    promise2 xử lý tác vụ 3s và CẦN data của tác vụ 1 trả ra kết quả giá trị x3 kết quả tác vụ 1 (=6)
	    promis3 CẦN data của tác vụ 2 để xác định kết quả tác vụ 2 có > 10 hay không va
      in ra màn hình true hoặc false.
*/

// var p1 = new Promise((resolve, reject) => { 
//   setTimeout(resolve, 3000, 2); 
// }); 
// var p2 = new Promise((resolve, reject) => { 
//   setTimeout(resolve, 3000, 2*3); 
// });
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, p2>10);
// });

// Promise.all([ p3]).then(data => { 
//   console.log(data);
// }).catch(reason => {
//   console.log(reason)
// });

/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
	var p = arr.splice(4,n)
	console.log(arr);
}
removeEnd([2, -3, 1, 3, -9, 7], 2)


/**
 * tao menu 2 cap
 * viet lai clear fix
 * ul li them bieu tuong j cung dc + font Awesome
 * 
 */