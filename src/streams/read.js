import { createReadStream } from 'fs';
import process  from 'node:process';

const read = async () => {
    let fileStream = createReadStream('./files/fileToRead.txt');

    fileStream.on('data', (chunk)=> {
        process.stdout.write(chunk + '\n');
    });
};

await read();