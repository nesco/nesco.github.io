import * as esbuild from "esbuild";
import * as fs from "node:fs";

//fs.rmSync("", { recursive: true });
//fs.mkdirSync("dist");
fs.cpSync("www/", "./", { recursive: true });

/** @type {esbuild.BuildOptions} */
let buildOptions = {
  entryPoints: ["src/main.tsx"],
  outdir: "./js",
  bundle: true,
  minify: true,
  logLevel: "info",
};

try {
  esbuild.buildSync(buildOptions);
} catch {}
