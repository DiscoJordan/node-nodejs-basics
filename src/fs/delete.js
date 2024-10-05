import fs from "node:fs";

const remove = async () => {
  fs.stat("./files/fileToRemove.txt", function (err) {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      fs.unlink("./files/fileToRemove.txt", function (err) {
        if (err) {
          throw new Error(err);
        }
      });
    }
  });
};

await remove();
