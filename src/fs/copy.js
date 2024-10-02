import fs from "node:fs";

const copy = async () => {
  if (fs.existsSync("./files_copy") || !fs.existsSync("./files")) {
    throw new Error("FS operation failed");
  } else {
    fs.cp("./files", "./files_copy", { recursive: true }, (err) => {
      if (err) {
        throw new Error(err);
      }
    });
  }
};

await copy();
