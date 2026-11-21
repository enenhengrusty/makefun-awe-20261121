import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = [
  "Sun lies warm across your blanket.",
  "Dust turns, slow, and settles.",
  "Down the hall, a kettle cools.",
  "",
  "That patch of warmth spent",
  "a hundred thousand years",
  "finding its way out of the sun,",
  "eight quiet minutes crossing the dark,",
  "to lie here on your sleeve,",
  "with nowhere left to go.",
].join("\n");

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`Invalid code point length: ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
