import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = [
  "Your grandmother hums in the kitchen.",
  "Dust turns, slow, and settles",
  "across the bed.",
  "",
  "The patch of warmth on your blanket",
  "spent a hundred thousand years",
  "finding its way out of the sun,",
  "eight quiet minutes crossing the dark,",
  "just to lie here on your hand,",
  "with nowhere left to go.",
].join("\n");

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`Invalid code point length: ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
