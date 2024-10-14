//
// let arr = [1,2,3]
// let arr2 = [4,5,6,7]

// console.log(...arr,...arr2,8,9)
// let arr3 = [...arr,6,7]
// console.log(arr3)
// console.log(arr)

// destructuring

// let arr = ["sumit singh", function () { return('happy birthday') }, 23]

// // let name = arr[0]
// // let greet = arr[1]
// // let age =arr[2]

// // console.log(name,greet(),age)

// let [name , greet,age] = arr
// console.log(greet())

// question practice

// 1.
// const arr = [1, 2, 3, 4]
// let [a, b] = arr
// //console.log(a, b)

// //2.
// const arr1 = [10, 20, 30, 40]
// let [x, ,z] = arr1
// //console.log(x,z)

// //3.
// const arr2 =[5]
// let [c,d=10] = arr2
// //console.log(c,d)

// //4.
// const arr3 =  [1,[2,3],4]
// let [ ,[e,f] ,]=arr3
// //console.log(e,f)

// //5.
// const arr4 = [1,2,3,4,5]
// let [m,n,...rest] = arr4
// //console.log(m,n,...rest)

// //6.
// function sum([...arr]){
//     let [a,b] = arr
//     return a+b
// }
// let result=sum([5,10,15])
// //console.log(result)

// //7.
// const arr5 =[1,2]
// const arr6 =[3,4]

// const arr7 = [...arr5,...arr6]
// let [p,q] = arr7
// //console.log(p,q) 

// //8.
// const users = [{name:'Alice',age:25},{name:'Bob',age:30}]
// users.forEach(({name})=>console.log(name))

// let obj ={
//     firstName:'sumit',
//     greet:function(){
//         console.log('greeting')
//     },
//     age:41,
//     address:{
//         city:'jamshedpur'
//     }
// }

// let {firstName,age,address:{city}}=obj
// console.log(firstName,age,city)