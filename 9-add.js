function add(a,b){
    return a+b
}
let arg1 = Number(process.argv[2]);
let arg2 = Number(process.argv[3]);

console.log(add(arg1, arg2));