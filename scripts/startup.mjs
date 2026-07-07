import { execSync } from "child_process";
import { existsSync } from "fs";

const dbPath = process.env.DINEWAY_DATABASE_URL?.replace("file:", "") || "/tmp/data.db";
const needsSeed = !existsSync(dbPath) || existsSync("./seed/seed.json");

if (needsSeed) {
  console.log("Database not found at", dbPath, "- running seed...");
  try {
    execSync("npx dineway seed seed/seed.json", { stdio: "inherit", cwd: process.cwd() });
    console.log("Seed completed successfully");
  } catch (e) {
    console.error("Seed failed:", e.message);
  }
} else {
  console.log("Database exists at", dbPath, "- skipping seed");
}

execSync("node dist/server/entry.mjs", { stdio: "inherit" });
