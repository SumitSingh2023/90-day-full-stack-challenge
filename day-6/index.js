function sayHello(name, age) {
     this.name = name;
     this.age = age

    console.log('hello', this)
}

var person = {
    name: "",
    age: 0
}

let bindFun = sayHello.bind(person, 'sumit', 24)
bindFun()

