// function sayHello(name, age) {
//      this.name = name;
//      this.age = age

//     console.log('hello', this)
// }

// let person = {
//     name: "",
//     age: 0
// }

// let bindFun = sayHello.bind(person, 'sumit', 24)
// bindFun()


function greet(){
    console.log('this inside greet',this)

    let arr =()=>{
        console.log('inside arr',this)
    }

    arr()
}

greet()