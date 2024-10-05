import { spawn } from "child_process";


const spawnChildProcess = async (args) => {
    const child = spawn("node", ['./files/script.js', ...args], {
        stdio: [process.stdin, process.stdout, process.stderr, "ipc"],
    });
    
    child.on("error", (error) => {
        console.error(error);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  [1, 2, 3] );



