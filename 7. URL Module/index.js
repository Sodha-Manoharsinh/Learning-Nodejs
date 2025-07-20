import { URL } from "url";

const myURL = new URL(
  "https://www.manoharsinh.com:8080/auth/login/signup?query=string#hash"
);
console.log(myURL.hash);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.password);
console.log(myURL.pathname);
console.log(myURL.href);
console.log(myURL.protocol);
console.log(myURL.search);
console.log(myURL.searchParams);

// both works the same
console.log(myURL.toJSON());
console.log(myURL.toString());
