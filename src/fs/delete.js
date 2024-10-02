import fs from "node:fs";

const remove = async () => {
  if (!fs.existsSync("./files/fileToRemove.txt")) {
    throw new Error("FS operation failed");
  } else {
    fs.unlink("./files/fileToRemove.txt", function (err) {
      if (err) {
        throw new Error(err);
      }
    });
  }
};

await remove();
