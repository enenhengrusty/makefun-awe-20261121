import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = [
  "You sleep against your mother's shoulder.",
  "The rails keep a slow, even count.",
  "A crossing bell fades behind you.",
  "",
  "Outside, the dark was a sea once,",
  "and the stars above it set out",
  "before there were rails or towns.",
  "The earth turns gently under the wheels,",
  "carrying you both home.",
].join("\n");

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`Invalid code point length: ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
