import fs from "node:fs";

const create = async () => {
  const content = "I am fresh and young";
  if (fs.existsSync("./files/fresh.txt")) {
    throw new Error("FS operation failed");
  } else {
    fs.writeFile("./files/fresh.txt", content, (err) => {
      if (err) {
        throw new Error(err);
      }
    });
  }
};

await create();
