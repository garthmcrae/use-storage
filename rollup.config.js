import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const config = [
  {
    input: "src/useStorage.ts",
    plugins: [
      typescript({
        tsconfig: "./tsconfig.bundle.json",
        declaration: true,
        declarationDir: "",
      }),
      terser(),
    ],
    output: [
      { file: "bundle/useStorage.esm.js", format: "esm", sourcemap: true },
    ],
    external: ["react"],
  },
];
export default config;
