let numbers = [2,5,3,8,7,9];

function num(a){
   let sum = 0; 
   for(i = 0; i<numbers.length; i++){
   // sum+=a[i]
    sum = sum+a[i]
    
   }
   return sum
}
console.log(num(numbers))


//average

function avg(a){
    let sum = 0; 
    for(i = 0; i<numbers.length; i++){
    // sum+=a[i]
     sum = sum+a[i]
     
    }
    return sum / a.length
 }
 console.log(avg(numbers))
 
 //longest in a string


 const strArr = ['animal','cup','computer', 'hello','mathematics','hey']
 function str(longest){
    let longestWord = "";
    for (i=0; i<strArr.length; i++){
        if(strArr[i].length > longestWord.length){
            longestWord=strArr[i]
        }
    }return (longestWord)
 }
 console.log(str(strArr))


 //part 4

 function newArray(x,y){
    let arr = [];
    for(i=0; i< x.length; i++){
        if( x[i].length > y){
            arr.push(x[i])
        }
    }return arr
 }
 console.log(newArray(strArr, 5))

 console.log('=======part 5========')
 //part 5
  

 //console.log(num(5))


 function count(x,y){
    console.log(x-(y-1));
    if(y>1){
        count(x, y-1);
    }

 }
 count(8,8)

console.log('part 2')


const data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

function array(){
 return data.sort((a, b) => a.age - b.age);    
}
console.log(array())

console.log('======filter*********')

let data2 = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]


function array2(){
    return data2.filter(data => data.age <=50);   
   }
   console.log(array2())
   



console.log('=======part 3 first Bullet =========')


let data3 = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

function increment(){
    
    for (i=0;i<data3[0].age; i++){

        
        actualAge = data3[0].age;
        

    }return actualAge
}
console.log(increment() + 5)



console.log('Part 3 ******second bullet point******')


let data4 = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
let  cloneUser;
function copy(){
 return cloneUser = { ...data4 };
}
console.log(copy())

function copyIncrement(){
    for (i=0;i<copy()[0].age; i++){

        
    return    copiedAge = data3[0].age;

}
}
console.log(copyIncrement() + 5)



