let myNumber = process.argv[2];
if (Number(myNumber)){
    console.log(`My number: ${Number(myNumber)}`)
} else {
    console.log('Not a number')
}