import * as fs from "fs";

const url =
  "/home/bhupendrasinh/Desktop/All folders/Node-js/5. FS Module/3. Sync api";

//   await fs.mkdir(`${url}/outputs/course/node`); // if we try to create multiple folder inside folder we need to use recursive = true
await fs.mkdirSync(`${url}/outputs/course/node`, { recursive: true });
// synchronous way we have to use Sync

// We can use every function just like this
