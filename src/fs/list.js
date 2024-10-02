import fs from "node:fs";

const list = async () => {
  if (!fs.existsSync("./files")) {
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
};

await list();
