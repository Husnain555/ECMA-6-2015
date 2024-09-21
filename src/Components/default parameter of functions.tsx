// interface Person {
//     name: string;
//     password: string;
//     email: string;
// }
// export function Parameters (props: Person) {
// return(
//     <div>
//         <h1>{props.name}</h1>
//         <h1>{props.password}</h1>
//         <h1>{props.email}</h1>
//     </div>
// )
//
// }
export const Value = function (value = 20 ,devil = 'Shitan'){
    console.log(value+devil);

}
// in ES6 we can assign default values to parameter
// if i can define values in arguments and only console value and devil its give me undefine
// but if we define them in arduments and re define them in function so functions value taken