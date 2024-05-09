//function composition
// const numbers=[1,2,3,4];
// //reverse function
// const newArr=[...numbers].reverse();
// console.log(numbers);
// console.log(newArr);

// function addTwo(x){
//     return x+2;
// }
// function multiplyByThree(x){
//     return x*3;
// }
// function composite(f,g){
//     return function(x){
//         return f(g(x));
//     };
// }
// const fun=composite(addTwo,multiplyByThree);
// console.log(fun(5));

const compose=function (arr){
    return function(x){
        //reduce right
       return arr.reduceRight(fn,x
        );
        function fn(acc,f){
            return f(acc);
        }
       // for(let i=arr.length-1;i>=0;i--)
        // for(let i in arr.reverse())
        // {
        //     x=arr[i](x);

        // }
        // return x;
    }

}
const fn1=compose([(x)=>x+1,(x)=>x*x,(x)=>2*x]);
const fn2=compose([(x)=>10*x,(x)=>10*x,(x)=>10*x]);
const fn3=compose([]);

console.log(fn1(4));
console.log(fn2(1));
console.log(fn3(42));