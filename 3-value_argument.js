const args = process.argv.slice(2);

// Check the number of arguments and print the appropriate message.
if (args.length === 0) {
  console.log("No argument");
} else {
  console.log(args[0]);
}