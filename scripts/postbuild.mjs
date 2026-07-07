import { writeFileSync, copyFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
writeFileSync("dist/server/package.json", JSON.stringify({ type: "module" }), "utf8");
copyFileSync(join(root, "package.json"), "dist/package.json");
console.log("Created dist/server/package.json and dist/package.json");
