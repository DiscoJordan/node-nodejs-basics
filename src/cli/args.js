const parseArgs = () => {
  process.argv.forEach((arg, id) => {
    if (arg[0] == "-" && arg[1] == "-") {
      console.log(arg.substr(2) + " is " + process.argv[id + 1]);
    }
  });
};

parseArgs();
