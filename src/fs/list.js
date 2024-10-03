import fs from "node:fs";

const list = async () => {
  fs.stat("./files", function (err) {
    if (err) {
      throw new Error("FS operation failed");
    } else
      fs.readdir("./files", (err, files) =>
        files.forEach((file) => {
          {
            console.log(file);
            if (err) {
              throw new Error(err);
            }
          }
        })
      );
  });
};

await list();
