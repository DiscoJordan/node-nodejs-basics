import { Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
  const coreCounts = cpus().length;
  const result = [];
  for (let i = 0; i < coreCounts; i++) {
    const worker = new Worker("./worker.js", { workerData: 10 + i });
    worker.on("message", (data) => {
      result[i] = { status: "resolved", data};

      if (result.length === coreCounts) {
        console.log(result);
      }
    });

    worker.on("error", () => {
      result[i] = {status: "error", data: null };

      if (result.length === coreCounts) {
        console.log(result);
      }
    });
  }
};

await performCalculations();
