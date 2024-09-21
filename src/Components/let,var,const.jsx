// var a = 10;
// var b = 20;
// var c = 3;
// var a = 30;
// var b = 40;
// var c = 50
// console.log(a,b,c)
// in this eample we can change the values of any veriable if we are using var
let a = 10;
// let a = 20;
console.log(a)
// but we cannpt change the value if we are using let to declare a veriable
// but not in functional scope
function X (){
    let a = 20
    console.log(a)
}
X();
// but in const we need to also assign value when we declaring the veriable we can assign value later of other declaration but not
// in const
let d;
d = 50
console.log(d)
// but not in const
const f =200
// f = 20
console.log(f)