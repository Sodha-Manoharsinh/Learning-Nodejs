import * as fs from "fs/promises";
import { fileURLToPath } from "url";

const url =
  "/home/bhupendrasinh/Desktop/All folders/Node-js/5. FS Module/1. Promise api";

try {
  //   await fs.mkdir(`${url}/outputs/course/node`); // if we try to create multiple folder inside folder we need to use recursive = true
  //   await fs.mkdir(`${url}/outputs/course/node`, { recursive: true });

  const files = await fs.readdir(`${url}/outputs`);
  for (const file of files) {
    console.log(file);
  }
  //   more functions like readFile,writeFile,appendFile,rmdir, stat, copyFile etc
} catch (error) {
  console.log(error);
}
