import { createWriteStream } from "fs";
import process from "node:process";

const write = async () => {
  let fileStream = createWriteStream("./files/fileToWrite.txt");
  process.stdin.pipe(fileStream)

};

await write();
