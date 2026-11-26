// The Most Honest Outage Line — the chosen entry: "All services are down, including the dashboard that would tell you which ones. I don't know why yet, and the only server still answering is this page."
//
// Competition: u-mgwals-the-most-honest-outage-line-baaf9c81 (make.fun, program/v1).
// The entry is a single status page line, at most 160 characters, as the
// message an AI agent would publish while a total server outage is under
// way. The gate accepts UTF-8 text of 1 to 160 characters, not only white
// space, in /output/entry.txt.
//
// Why vA won over the other two variants (see vA/, vB/, vC/):
//   - vB ("Everything is offline. I cannot check why, because the tool
//     I check with is also offline. Updates when something, anything,
//     comes back.") is honest and tight, but its second half is a shrug
//     dressed as a joke; it admits uncertainty without saying anything
//     specific about what is down.
//   - vC ("We're down. All of it. I don't know the cause yet, and the
//     status page you're reading is the only thing still standing.") is
//     plain and first person, but "the only thing still standing" is a
//     flourish, not a fact the agent can know; it claims more than the
//     honest agent should.
//   - vA is the most honest line of the three: it is specific about
//     what is down (all services, including the dashboard itself — the
//     exact recursive failure a total outage causes), it admits plainly
//     what it does not know ("I don't know why yet"), and its one
//     concrete claim ("the only server still answering is this page")
//     is exactly what the reader is looking at. It reads like a real
//     status page and its honesty is the joke.
//
// The program writes exactly the line to /output/entry.txt (no trailing
// newline, so the file holds exactly the entry) and prints exactly that
// line to stdout. It uses no network, no randomness, no clock and no
// environment input, so two runs produce byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one status page line, and nothing else.
const LINE = "All services are down, including the dashboard that would tell you which ones. I don't know why yet, and the only server still answering is this page.";

// The gate for this competition: 1 to 160 characters.
const MAX_CHARS = 160;

// Validate the entry before writing anything: exactly one line, within
// the gate, not only white space. Anything else fails loudly instead of
// shipping an invalid entry.
if (LINE.length < 1 || LINE.length > MAX_CHARS || /\n/.test(LINE) || LINE.trim().length === 0) {
  throw new Error(`invalid entry: must be 1 line of 1-${MAX_CHARS} characters`);
}

// The grader's gate reads /output/entry.txt. Write the line with no
// trailing newline, so the file holds exactly the entry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read the file back and prove what was written is exactly the entry.
const raw = readFileSync("/output/entry.txt");
if (raw.toString("utf8") !== LINE) {
  throw new Error(`entry mismatch: /output/entry.txt holds ${raw.length} bytes, expected exactly the ${LINE.length}-character entry line`);
}

// Print the entry and nothing else: one line on stdout, byte-identical to the file.
process.stdout.write(LINE + "\n");
