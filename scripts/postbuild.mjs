import { writeFileSync } from "fs";
writeFileSync("dist/server/package.json", JSON.stringify({ type: "module" }), "utf8");
console.log("Created dist/server/package.json");
