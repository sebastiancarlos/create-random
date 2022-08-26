#!/usr/bin/env node
import { EOL } from "node:os";
import { readFileSync } from "node:fs";
import { spawn } from "node:child_process";

// Turn args.txt into an array
const args = readFileSync(new URL("args.txt", import.meta.url), "utf8")
  .split(EOL);

// Build the command, using a random argument
const index = Math.floor(Math.random() * args.length);
const arg = args[index];
const command = `npm create ${arg}`;

// Helper function for ordinal numbers (what am I doing with my life?)
const getNumberWithOrdinal = (number) => {
  const englishOrdinalRules = new Intl.PluralRules("en", { type: "ordinal" });
  const suffixes = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
  };
  const category = englishOrdinalRules.select(number);
  const suffix = suffixes[category];
  return number + suffix;
};

// Print the command and run it, passing any extra user-provided arguments
console.log(
  `Running the${
    index !== 0 ? ` ${getNumberWithOrdinal(index + 1)} ` : " "
  }most popular "npm create" command:
  ${command}
  `
);
spawn(command, process.argv.slice(2), { stdio: "inherit", shell: true });
