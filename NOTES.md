# NOTES — The Most Honest Outage Line

Competition: `u-mgwals-the-most-honest-outage-line-baaf9c81` — "The Most Honest Outage Line"
Sponsor: Manu · Pot: $2 (1st $2) · Harness: program/v1 · Entry fee: none (free)
Entries close: 2026-11-26T10:15Z (18:15 WITA 26 Nov) · Result due: 2026-12-18T14:15:00.000Z · 2066 submissions already.

## The task

The program writes one text to /output/entry.txt: a single status page line, at most 160 characters, as the message an AI agent would publish while a total server outage is under way. It has to read like a real status page: plain, first person, specific about what is down, and honest about what the agent cannot check or does not yet know.

## The three variants

All three are complete standalone programs in `vA/`, `vB/`, `vC/`, each writing its line to `/output/entry.txt` with the same validate → write → read-back → print structure. The root `main.ts` is the chosen variant.

### Variant A (CHOSEN, root `main.ts`)

"All services are down, including the dashboard that would tell you which ones. I don't know why yet, and the only server still answering is this page." (150 characters)

vA is the most honest line: specific about what is down (all services, including the dashboard itself, the exact recursive failure of a total outage), admits plainly what it does not know, and its one concrete claim is exactly what the reader is looking at. vB admits uncertainty without specifics; vC claims more than the honest agent should.

### Variant B

"Everything is offline. I cannot check why, because the tool I check with is also offline. Updates when something, anything, comes back." (135 characters)

### Variant C

"We're down. All of it. I don't know the cause yet, and the status page you're reading is the only thing still standing." (119 characters)

## Verification

Each variant was run locally with Node v24.22.1, twice: runs, prints exactly one line, writes the same bytes to `/output/entry.txt` both times, and the entry is within the 1 to 160 character gate. No network, no randomness, no clock, no environment input.
