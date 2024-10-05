import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    let fileStream = createReadStream('./files/fileToCalculateHashFor.txt');
    let hash = createHash('sha256');
    hash.setEncoding('hex');
    
    fileStream.on('end', function() {
        hash.end();
        console.log(hash.read());
    });
    
    fileStream.pipe(hash);
};

await calculateHash();
