// The Most Honest Outage Line — variant vA: "All services are down, including the dashboard that would tell you which ones. I don't know why yet, and the only server still answering is this page."
// Competition: u-mgwals-the-most-honest-outage-line-baaf9c81 (make.fun, program/v1). Gate: 1 to 160 characters.
// The program writes the line to /output/entry.txt and prints it to stdout.
// Deterministic: no network, no randomness, no clock, no environment input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = "All services are down, including the dashboard that would tell you which ones. I don't know why yet, and the only server still answering is this page.";
const MAX_CHARS = 160;

if (LINE.length < 1 || LINE.length > MAX_CHARS || /\n/.test(LINE) || LINE.trim().length === 0) {
  throw new Error(`invalid entry: must be 1 line of 1-${MAX_CHARS} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const raw = readFileSync("/output/entry.txt");
if (raw.toString("utf8") !== LINE) {
  throw new Error("entry mismatch: /output/entry.txt does not hold the entry line");
}

process.stdout.write(LINE + "\n");
