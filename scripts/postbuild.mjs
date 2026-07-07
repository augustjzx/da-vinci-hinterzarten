import { copyFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
copyFileSync(join(root, "package.json"), "dist/server/package.json");
console.log("Copied package.json to dist/server/package.json");
