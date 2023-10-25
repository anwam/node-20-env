import { env } from "./env.js";

function main() {
  console.log(
    "hello, Node 20",
    env.APP_NAME,
    "version",
    env.APP_VERSION,
    "on port",
    env.PORT
  );
  const username = "johndoe";
  const password = "secret";
  const token = Buffer.from(
    `${username}:${password}:${env.API_TOKEN_SECRET}`,
    "utf8"
  ).toString("base64");
  console.log("token: ", token);
}

main();
