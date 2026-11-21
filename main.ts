import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = [
  "You doze in the window seat.",
  "The cat breathes against your knee. In. Out.",
  "Sun lies on you both, warm as a hand.",
  "",
  "That warmth left the heart of the sun",
  "before there were cats, or windows, or you,",
  "and wandered a hundred thousand years",
  "to rest here.",
  "More is already on the way.",
].join("\n");

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`Invalid code point length: ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
