// export function Hello (){
//     let array = ['husnain',',babar','male'];
//     let [fname,lname,gender] = array;
// }
// this how we destrucre arrye elemnt we can also asign then default value
let array = [1, 2, 3, 4, 6];
let [a,b,c,d,e = 5] = array;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
// if we remove 6 from array we get in console 5
