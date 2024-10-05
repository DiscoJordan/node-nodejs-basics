import fs from "node:fs";

const rename = async () => {
  fs.stat("./files/wrongFilename.txt", function (err) {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.stat("./files/properFilename.md", function (err) {
        if (err) {
          fs.rename(
            "./files/wrongFilename.txt",
            "./files/properFilename.md",
            function (err) {
              if (err) {
                throw new Error(err);
              }
            }
          );
        } else {
          throw new Error("FS operation failed");
        }
      });
    }
  });
};

await rename();
