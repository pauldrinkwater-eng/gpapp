import next from "eslint-config-next";

export default [
  ...next, // core-web-vitals included
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];
