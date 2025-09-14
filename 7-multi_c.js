const arg = process.argv[2];
let i = arg;
if (Number(arg) > 0){
    while (i !== 0){
        console.log('C is fun');
        i--;
    }
} else {
    console.log('Missing number of occurrences');
}