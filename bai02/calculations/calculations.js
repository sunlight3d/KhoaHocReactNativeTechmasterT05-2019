import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'

let x = 10
var y = 20
//co dien
/*
function sum(x, y) {
    // alert("Sum 2 numbers:")
    return x + y;
}
*/
//arrow function = lambda 
/*
const sum = (x, y) => {
    return x + y
}
*/
//one-line function
const sum = (x, y) => x + y
//one-param, one-line
const square = x =>  x * x
//example of an object in JS:
let person = {
    //key - value
    name: "Hoang",
    age: 30,
    email: "hoang@gmail.com"
}
//An example os Array(List type):
var products = [
    {
        name: "iphone 7",
        year: 2017,
        emei: '77xxee2378'
    },
    {
        name: "iphone 8",
        year: 2018,
        emei: '188xxe88378'
    },
    {
        name: "iphone 6",
        year: 2016,
        emei: '66xxee2378'
    },
    {
        name: "iphone X",
        year: 2019,
        emei: '19999ee2378'
    }
]
//function with no-return
const sayHello = () => {
    //JSON = Javascript Object Notation
    //alert(`this person = ${JSON.stringify(person)}`)
    let x1 = '10'
    let x2 = '10'
    /*
    if (x1 == x2) {//so sanh ve gia tri
        alert("Bang nhau day !")
    }
    */
   /*
   if(x1 === x2) { //so sanh gia tri va kieu
    alert("Bang nhau day nhe!")
   }
   */
   //non-destructuring
   /*
   let name = person.name
   let email = person.email
   */
   //destructuring
   /*
   const {name, email} = person   
   alert(`myName = ${name}, myEmail = ${email}`)
   */
   //iterate an array "classic"
   /*
   for(let i = 0; i < products.length; i++) {
       let product = products[i]
       console.log(`product ${i} = ${JSON.stringify(product)}`)
   }
   */
   //use forEach = query, list
   /*
   products.forEach((product, index) => {
    console.log(`productAA ${index} = ${JSON.stringify(product)}`)
   })
   */
   //filter a list
   let filteredProducts = products.filter(product => {
       return product.year >= 2018
   })
   //alert(`filteredProducts = ${JSON.stringify(filteredProducts)}`)
   //alert(`products = ${JSON.stringify(products)}`)   
   let sortedProducts = products.sort((p1, p2) => {
    /*
    if (product1.year > product2.year) {
           return -1
       } else {
           return 1
       }
       */
      //ternary
    return (p1.year < p2.year) ? 1 : -1
   })
   //alert(`sortedProducts = ${JSON.stringify(sortedProducts)}`)   
   //delete an item in a list
   products = products.filter(product => {
       //one-line function
       return product.year !== 2016
   })
   //alert(`updated products = ${JSON.stringify(products)}`)
   AsyncStorage.setItem("isLoggedIn", "1")   
   AsyncStorage.setItem("loggedInUser", "hoang")
   //localStorage.getItem("loggedInUser")

   //Dictionary
   let points = {
       1: 11,
       2: 22,
       3: 33,
       4: 44,
   }//
   
   let arrayOfPoints = Object.keys(points).map(key => {
       return {x: key, y: points[key]}
   })
   alert(`arrayOfPoints = ${JSON.stringify(arrayOfPoints)}`)
   //alert(JSON.stringify(points))
   //alert(points[2])
   //change an constant's array 
   
}

export {
    sum,
    square,
    sayHello
}