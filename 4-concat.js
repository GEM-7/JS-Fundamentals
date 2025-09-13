// Check if exactly two arguments are provided
if (process.argv.length === 4) {
  // process.argv[0] is 'node', process.argv[1] is the script path
  const arg1 = process.argv[2];
  const arg2 = process.argv[3];
  console.log(`${arg1} is ${arg2}`);
} else {
  console.log("HBTN is undefined.");
}