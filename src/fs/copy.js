import fs from "node:fs";

const copy = async () => {
  fs.stat("./files_copy", function (err) {
    if (err) {
      fs.stat("./files", function (err) {
        if (err) {
          throw new Error("FS operation failed");
        } else {
          fs.cp("./files", "./files_copy", { recursive: true }, (err) => {
            if (err) {
              throw new Error(err);
            }
          });
        }
      });
    } else {
      throw new Error("FS operation failed");
    }
  });

  
};

await copy();
