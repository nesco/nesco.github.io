import * as esbuild from "esbuild";
import * as fs from "node:fs";

fs.rmSync("dist", { recursive: true });
fs.mkdirSync("dist");
fs.cpSync("www/", "dist/", { recursive: true });

/** @type {esbuild.BuildOptions} */
let buildOptions = {
  entryPoints: ["src/main.tsx"],
  outdir: "dist/js",
  bundle: true,
  minify: true,
  logLevel: "info",
};

try {
  esbuild.buildSync(buildOptions);
} catch {}
