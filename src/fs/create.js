import fs from "node:fs";

const create = async () => {
  const content = "I am fresh and young";
    fs.stat("./files/fresh.txt", function (err) {
      if (err) {
        fs.writeFile("./files/fresh.txt", content, (err) => {
          if (err) {
            throw new Error(err);
          }
        });
      }
      else { throw new Error("FS operation failed");}
    })
  
};

await create();
