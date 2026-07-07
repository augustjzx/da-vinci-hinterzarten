import { execSync } from "child_process";
import { existsSync } from "fs";

const dbUrl = process.env.DINEWAY_DATABASE_URL || "file:/tmp/data.db";
const dbPath = dbUrl.replace("file:", "").split("?")[0];
const needsSeed = !existsSync(dbPath);

if (needsSeed) {
  console.log("Database not found at", dbPath, "- running seed with", dbUrl);
  try {
    execSync(`npx dineway seed seed/seed.json --database "${dbUrl}"`, {
      stdio: "inherit",
      cwd: process.cwd(),
    });
    console.log("Seed completed successfully");
  } catch (e) {
    console.error("Seed failed:", e.message);
  }
} else {
  console.log("Database exists at", dbPath, "- skipping seed");
}

execSync("node dist/server/entry.mjs", { stdio: "inherit" });
