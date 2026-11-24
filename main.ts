import { mkdirSync, writeFileSync } from "node:fs";

// One original dad joke, written to be told out loud at the dinner table.
// A single clean pun, punchline at the end, well under the 200-character cap.
const JOKE =
  "Why did I bring a pencil to the barbecue? So I could draw the line at the steaks.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
