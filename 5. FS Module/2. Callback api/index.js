import * as fs from "fs";

const url =
  "/home/bhupendrasinh/Desktop/All folders/Node-js/5. FS Module/2. Callback api";

//   await fs.mkdir(`${url}/outputs/course/node`); // if we try to create multiple folder inside folder we need to use recursive = true
await fs.mkdir(`${url}/outputs/course/node`, { recursive: true }, (error) => {
  if (error) throw error;
  console.log("Folder created...");
});

// We can use every function just like this
