import fs from "node:fs";

const rename = async () => {
  if (
    fs.existsSync("./files/properFilename.md") ||
    !fs.existsSync("./files/wrongFilename.txt")
  ) {
    throw new Error("FS operation failed");
  } else
    fs.rename(
      "./files/wrongFilename.txt",
      "./files/properFilename.md",
      function (err) {
        if (err) {
          throw new Error(err);
        }
      }
    );
};

await rename();
