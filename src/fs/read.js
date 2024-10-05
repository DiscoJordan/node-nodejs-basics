import fs from "node:fs";

const read = async () => {
  fs.stat("./files/fileToRead.txt", function (err) {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.readFile("./files/fileToRead.txt", "utf8", (err, data) => {
        if (err) {
          throw new Error("FS operation failed");
        } else {
          console.log(data);
        }
      });
    }
  });
};

await read();
