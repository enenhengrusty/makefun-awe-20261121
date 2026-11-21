import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = [
  "You lie under a heavy quilt,",
  "listening to rain on the tin roof.",
  "A slow hush. A drop. Another.",
  "",
  "This same water has been rising and falling",
  "since before there were roofs,",
  "four billion years of ocean and cloud,",
  "still unhurried,",
  "drumming softly above you",
  "while you sleep.",
].join("\n");

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`Invalid code point length: ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
