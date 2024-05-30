var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// utils.ts
var ORG, slugify, getWebUrl;
var init_utils = __esm({
  "utils.ts"() {
    "use strict";
    ORG = "graveflex";
    slugify = (str) => {
      const slug = str.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/\//g, "-");
      return slug;
    };
    getWebUrl = ({
      projectName,
      localDomain,
      appName,
      localPort,
      local,
      forceUrl
    }) => {
      if (forceUrl) {
        return forceUrl;
      }
      if (local) {
        return `http://${localDomain}:${localPort}`;
      }
      const VERCEL_URL = process.env.VERCEL_URL || "";
      if (VERCEL_URL) {
        return `https://${VERCEL_URL}`;
      }
      const BRANCH = process.env.VERCEL_GIT_COMMIT_REF || "main";
      if (BRANCH === "main") {
        return `https://${projectName}-${appName}.vercel.app`;
      }
      return `https://${projectName}-${appName}-git-${slugify(
        BRANCH
      )}-${ORG}.vercel.app`;
    };
  }
});

// index.ts
var settings_exports = {};
__export(settings_exports, {
  AUTO_LOGIN: () => AUTO_LOGIN,
  BLOB_ENDPOINT_URL: () => BLOB_ENDPOINT_URL,
  BLOB_STORE_ID: () => BLOB_STORE_ID,
  DEFAULT_LOCALE: () => DEFAULT_LOCALE,
  DOCS_PORT: () => DOCS_PORT,
  LOCAL: () => LOCAL,
  LOCALES: () => LOCALES,
  LOCALE_SETTINGS: () => LOCALE_SETTINGS,
  LOCAL_DOMAIN: () => LOCAL_DOMAIN,
  NEXT_PORT: () => NEXT_PORT,
  PROJECT_NAME: () => PROJECT_NAME,
  WEB_URL: () => WEB_URL
});
var LOCAL_DOMAIN, PROJECT_NAME, AUTO_LOGIN, NEXT_PORT, DOCS_PORT, BLOB_ENDPOINT_URL, BLOB_STORE_ID, LOCAL, FORCE_WEB_URL, DEFAULT_LOCALE, LOCALE_SETTINGS, LOCALES, WEB_URL;
var init_settings = __esm({
  "index.ts"() {
    "use strict";
    init_utils();
    LOCAL_DOMAIN = "localhost";
    PROJECT_NAME = process.env.PROJECT_NAME;
    AUTO_LOGIN = process.env.AUTO_LOGIN === "true";
    NEXT_PORT = process.env.NEXT_PORT;
    DOCS_PORT = process.env.DOCS_PORT;
    BLOB_ENDPOINT_URL = process.env.BLOB_ENDPOINT_URL;
    BLOB_STORE_ID = process.env.BLOB_STORE_ID;
    LOCAL = process.env.LOCAL === "true";
    FORCE_WEB_URL = process.env.FORCE_WEB_URL;
    DEFAULT_LOCALE = "en-US";
    LOCALE_SETTINGS = [
      {
        label: "US English",
        code: DEFAULT_LOCALE
      },
      {
        label: "US Spanish",
        code: "es-US"
      }
    ];
    LOCALES = LOCALE_SETTINGS.map(({ code }) => code);
    WEB_URL = getWebUrl({
      projectName: PROJECT_NAME,
      localDomain: LOCAL_DOMAIN,
      appName: "web",
      localPort: NEXT_PORT,
      local: LOCAL,
      forceUrl: FORCE_WEB_URL
    });
  }
});

// vite.config.ts
import dotenv from "file:///Users/siobahnschuck/GRAVEFLEX/monorepo/nextjs-vercel/node_modules/.pnpm/dotenv@16.4.5/node_modules/dotenv/lib/main.js";
import path from "path";
import dts from "file:///Users/siobahnschuck/GRAVEFLEX/monorepo/nextjs-vercel/node_modules/.pnpm/vite-plugin-dts@3.8.3_@types+node@18.19.26_rollup@4.13.0_typescript@5.4.5_vite@5.2.12_@types+_7ezzbtj5572lcjpai5f6x2l7qi/node_modules/vite-plugin-dts/dist/index.mjs";
import EnvironmentPlugin from "file:///Users/siobahnschuck/GRAVEFLEX/monorepo/nextjs-vercel/node_modules/.pnpm/vite-plugin-environment@1.1.3_vite@5.2.12_@types+node@18.19.26_sass@1.75.0_terser@5.29.2_/node_modules/vite-plugin-environment/dist/index.js";
import tsConfigPaths from "file:///Users/siobahnschuck/GRAVEFLEX/monorepo/nextjs-vercel/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.5_vite@5.2.12_@types+node@18.19.26_sass@1.75.0_terser@5.29.2_/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { defineConfig } from "file:///Users/siobahnschuck/GRAVEFLEX/monorepo/nextjs-vercel/node_modules/.pnpm/vitest@0.34.6_jsdom@22.1.0_sass@1.75.0_terser@5.29.2/node_modules/vitest/dist/config.js";

// logSettingsPlugin.ts
function logSettingsPlugin() {
  return {
    name: "settings-log",
    async closeBundle() {
      const SETTINGS = (init_settings(), __toCommonJS(settings_exports));
      console.log("Using the following settings:");
      console.table(SETTINGS);
    }
  };
}
var logSettingsPlugin_default = logSettingsPlugin;

// vite.config.ts
var __vite_injected_original_dirname = "/Users/siobahnschuck/GRAVEFLEX/monorepo/nextjs-vercel/packages/settings";
var configFn = async () => {
  dotenv.config({ path: `${__vite_injected_original_dirname}/../../.env` });
  const environmentPlugin = EnvironmentPlugin({
    PROJECT_NAME: null,
    NEXT_PORT: null,
    DOCS_PORT: null,
    LOCAL: "false",
    IS_PREVIEW: "false",
    VERCEL_URL: null,
    VERCEL_GIT_PULL_REQUEST_ID: null,
    VERCEL_GIT_COMMIT_REF: null,
    PORT: null,
    BLOB_ENDPOINT_URL: null,
    BLOB_STORE_ID: null
  });
  const logSettingsPlugin2 = logSettingsPlugin_default();
  const tsPaths = tsConfigPaths({
    projects: [
      path.resolve(__vite_injected_original_dirname, "../ui/tsconfig.json"),
      path.resolve(__vite_injected_original_dirname, "../../apps/web/tsconfig.json")
    ]
  });
  return {
    test: {
      globals: true,
      coverage: {
        provider: "v8",
        clean: true,
        reporter: ["text", "html", "clover", "json", "cobertura"]
      },
      environment: "jsdom"
    },
    plugins: [
      !process.env.VITEST && environmentPlugin,
      logSettingsPlugin2,
      tsPaths,
      dts()
    ],
    build: {
      outDir: path.join(__vite_injected_original_dirname, "dist"),
      lib: {
        entry: path.resolve(__vite_injected_original_dirname, "index.ts"),
        name: "@mono/settings",
        fileName: (format, fname) => {
          const suffix = format === "umd" ? "cjs" : "js";
          return `${fname}.${format}.${suffix}`;
        }
      }
    }
  };
};
var vite_config_default = defineConfig(configFn);
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidXRpbHMudHMiLCAiaW5kZXgudHMiLCAidml0ZS5jb25maWcudHMiLCAibG9nU2V0dGluZ3NQbHVnaW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2lvYmFobnNjaHVjay9HUkFWRUZMRVgvbW9ub3JlcG8vbmV4dGpzLXZlcmNlbC9wYWNrYWdlcy9zZXR0aW5nc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3Npb2JhaG5zY2h1Y2svR1JBVkVGTEVYL21vbm9yZXBvL25leHRqcy12ZXJjZWwvcGFja2FnZXMvc2V0dGluZ3MvdXRpbHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3Npb2JhaG5zY2h1Y2svR1JBVkVGTEVYL21vbm9yZXBvL25leHRqcy12ZXJjZWwvcGFja2FnZXMvc2V0dGluZ3MvdXRpbHMudHNcIjtleHBvcnQgdHlwZSBHZXRVcmwgPSB7XG4gIHByb2plY3ROYW1lPzogc3RyaW5nO1xuICBsb2NhbERvbWFpbj86IHN0cmluZztcbiAgYXBwTmFtZTogJ3dlYic7XG4gIGxvY2FsUG9ydD86IHN0cmluZztcbiAgbG9jYWw/OiBib29sZWFuO1xuICBmb3JjZVVybD86IHN0cmluZztcbn07XG5cbmNvbnN0IE9SRyA9ICdncmF2ZWZsZXgnO1xuXG5jb25zdCBzbHVnaWZ5ID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNsdWcgPSBzdHJcbiAgICAudG9Mb3dlckNhc2UoKSAvLyBDb252ZXJ0IHRvIGxvd2VyY2FzZVxuICAgIC5yZXBsYWNlKC9bXmEtejAtOS1dL2csICctJykgLy8gUmVwbGFjZSBhbnkgbm9uLWFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIHdpdGggaHlwaGVuc1xuICAgIC5yZXBsYWNlKC8tKy9nLCAnLScpIC8vIFJlcGxhY2UgYW55IGNvbnNlY3V0aXZlIGh5cGhlbnMgd2l0aCBhIHNpbmdsZSBoeXBoZW5cbiAgICAucmVwbGFjZSgvXi18LSQvZywgJycpIC8vIFJlbW92ZSBhbnkgbGVhZGluZyBvciB0cmFpbGluZyBoeXBoZW5zXG4gICAgLnJlcGxhY2UoL1xcLy9nLCAnLScpOyAvLyByZXBsYWNlIGZvcndhcmQgc2xhc2hlcyB3aXRoIGh5cGhlbnNcbiAgcmV0dXJuIHNsdWc7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0V2ViVXJsID0gKHtcbiAgcHJvamVjdE5hbWUsXG4gIGxvY2FsRG9tYWluLFxuICBhcHBOYW1lLFxuICBsb2NhbFBvcnQsXG4gIGxvY2FsLFxuICBmb3JjZVVybFxufTogR2V0VXJsKSA9PiB7XG4gIGlmIChmb3JjZVVybCkge1xuICAgIHJldHVybiBmb3JjZVVybDtcbiAgfVxuXG4gIGlmIChsb2NhbCkge1xuICAgIHJldHVybiBgaHR0cDovLyR7bG9jYWxEb21haW59OiR7bG9jYWxQb3J0fWA7XG4gIH1cblxuICBjb25zdCBWRVJDRUxfVVJMID0gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCB8fCAnJztcblxuICBpZiAoVkVSQ0VMX1VSTCkge1xuICAgIHJldHVybiBgaHR0cHM6Ly8ke1ZFUkNFTF9VUkx9YDtcbiAgfVxuXG4gIGNvbnN0IEJSQU5DSCA9IHByb2Nlc3MuZW52LlZFUkNFTF9HSVRfQ09NTUlUX1JFRiB8fCAnbWFpbic7XG4gIGlmIChCUkFOQ0ggPT09ICdtYWluJykge1xuICAgIHJldHVybiBgaHR0cHM6Ly8ke3Byb2plY3ROYW1lfS0ke2FwcE5hbWV9LnZlcmNlbC5hcHBgO1xuICB9XG5cbiAgcmV0dXJuIGBodHRwczovLyR7cHJvamVjdE5hbWV9LSR7YXBwTmFtZX0tZ2l0LSR7c2x1Z2lmeShcbiAgICBCUkFOQ0hcbiAgKX0tJHtPUkd9LnZlcmNlbC5hcHBgO1xufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3Npb2JhaG5zY2h1Y2svR1JBVkVGTEVYL21vbm9yZXBvL25leHRqcy12ZXJjZWwvcGFja2FnZXMvc2V0dGluZ3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9zaW9iYWhuc2NodWNrL0dSQVZFRkxFWC9tb25vcmVwby9uZXh0anMtdmVyY2VsL3BhY2thZ2VzL3NldHRpbmdzL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9zaW9iYWhuc2NodWNrL0dSQVZFRkxFWC9tb25vcmVwby9uZXh0anMtdmVyY2VsL3BhY2thZ2VzL3NldHRpbmdzL2luZGV4LnRzXCI7aW1wb3J0IHsgZ2V0V2ViVXJsIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBMT0NBTF9ET01BSU4gPSAnbG9jYWxob3N0JztcbmV4cG9ydCBjb25zdCBQUk9KRUNUX05BTUUgPSBwcm9jZXNzLmVudi5QUk9KRUNUX05BTUU7XG5leHBvcnQgY29uc3QgQVVUT19MT0dJTiA9IHByb2Nlc3MuZW52LkFVVE9fTE9HSU4gPT09ICd0cnVlJztcblxuZXhwb3J0IGNvbnN0IE5FWFRfUE9SVCA9IHByb2Nlc3MuZW52Lk5FWFRfUE9SVDtcbmV4cG9ydCBjb25zdCBET0NTX1BPUlQgPSBwcm9jZXNzLmVudi5ET0NTX1BPUlQ7XG5cbmV4cG9ydCBjb25zdCBCTE9CX0VORFBPSU5UX1VSTCA9IHByb2Nlc3MuZW52LkJMT0JfRU5EUE9JTlRfVVJMO1xuZXhwb3J0IGNvbnN0IEJMT0JfU1RPUkVfSUQgPSBwcm9jZXNzLmVudi5CTE9CX1NUT1JFX0lEO1xuXG5leHBvcnQgY29uc3QgTE9DQUwgPSBwcm9jZXNzLmVudi5MT0NBTCA9PT0gJ3RydWUnO1xuY29uc3QgRk9SQ0VfV0VCX1VSTCA9IHByb2Nlc3MuZW52LkZPUkNFX1dFQl9VUkw7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0xPQ0FMRSA9ICdlbi1VUycgYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgTE9DQUxFX1NFVFRJTkdTID0gW1xuICB7XG4gICAgbGFiZWw6ICdVUyBFbmdsaXNoJyxcbiAgICBjb2RlOiBERUZBVUxUX0xPQ0FMRVxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdVUyBTcGFuaXNoJyxcbiAgICBjb2RlOiAnZXMtVVMnIGFzIGNvbnN0XG4gIH1cbl07XG5leHBvcnQgY29uc3QgTE9DQUxFUyA9IExPQ0FMRV9TRVRUSU5HUy5tYXAoKHsgY29kZSB9KSA9PiBjb2RlKTtcbmV4cG9ydCB0eXBlIExhbmd1YWdlTG9jYWxlID0gKHR5cGVvZiBMT0NBTEVTKVtudW1iZXJdO1xuXG5leHBvcnQgY29uc3QgV0VCX1VSTCA9IGdldFdlYlVybCh7XG4gIHByb2plY3ROYW1lOiBQUk9KRUNUX05BTUUsXG4gIGxvY2FsRG9tYWluOiBMT0NBTF9ET01BSU4sXG4gIGFwcE5hbWU6ICd3ZWInLFxuICBsb2NhbFBvcnQ6IE5FWFRfUE9SVCxcbiAgbG9jYWw6IExPQ0FMLFxuICBmb3JjZVVybDogRk9SQ0VfV0VCX1VSTFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9zaW9iYWhuc2NodWNrL0dSQVZFRkxFWC9tb25vcmVwby9uZXh0anMtdmVyY2VsL3BhY2thZ2VzL3NldHRpbmdzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc2lvYmFobnNjaHVjay9HUkFWRUZMRVgvbW9ub3JlcG8vbmV4dGpzLXZlcmNlbC9wYWNrYWdlcy9zZXR0aW5ncy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc2lvYmFobnNjaHVjay9HUkFWRUZMRVgvbW9ub3JlcG8vbmV4dGpzLXZlcmNlbC9wYWNrYWdlcy9zZXR0aW5ncy92aXRlLmNvbmZpZy50c1wiOy8qIGVzbGludC1kaXNhYmxlIHR1cmJvL25vLXVuZGVjbGFyZWQtZW52LXZhcnMgKi9cbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IEVudmlyb25tZW50UGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWVudmlyb25tZW50JztcbmltcG9ydCB0c0NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIFVzZXJDb25maWdGbiB9IGZyb20gJ3ZpdGVzdC9jb25maWcnO1xuXG5pbXBvcnQgTG9nU2V0dGluZ3NQbHVnaW4gZnJvbSAnLi9sb2dTZXR0aW5nc1BsdWdpbic7XG5cbmNvbnN0IGNvbmZpZ0ZuOiBVc2VyQ29uZmlnRm4gPSBhc3luYyAoKSA9PiB7XG4gIGRvdGVudi5jb25maWcoeyBwYXRoOiBgJHtfX2Rpcm5hbWV9Ly4uLy4uLy5lbnZgIH0pO1xuXG4gIGNvbnN0IGVudmlyb25tZW50UGx1Z2luID0gRW52aXJvbm1lbnRQbHVnaW4oe1xuICAgIFBST0pFQ1RfTkFNRTogbnVsbCxcbiAgICBORVhUX1BPUlQ6IG51bGwsXG4gICAgRE9DU19QT1JUOiBudWxsLFxuICAgIExPQ0FMOiAnZmFsc2UnLFxuICAgIElTX1BSRVZJRVc6ICdmYWxzZScsXG4gICAgVkVSQ0VMX1VSTDogbnVsbCxcbiAgICBWRVJDRUxfR0lUX1BVTExfUkVRVUVTVF9JRDogbnVsbCxcbiAgICBWRVJDRUxfR0lUX0NPTU1JVF9SRUY6IG51bGwsXG4gICAgUE9SVDogbnVsbCxcbiAgICBCTE9CX0VORFBPSU5UX1VSTDogbnVsbCxcbiAgICBCTE9CX1NUT1JFX0lEOiBudWxsXG4gIH0pO1xuXG4gIGNvbnN0IGxvZ1NldHRpbmdzUGx1Z2luID0gTG9nU2V0dGluZ3NQbHVnaW4oKTtcbiAgLy8gb24gYnVpbGQvdGVzdCwgdGhpcyBoYW5kbGVzIHRzY29uZmlnIHBhdGhzXG4gIGNvbnN0IHRzUGF0aHMgPSB0c0NvbmZpZ1BhdGhzKHtcbiAgICBwcm9qZWN0czogW1xuICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3VpL3RzY29uZmlnLmpzb24nKSxcbiAgICAgIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9hcHBzL3dlYi90c2NvbmZpZy5qc29uJylcbiAgICBdXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgdGVzdDoge1xuICAgICAgZ2xvYmFsczogdHJ1ZSxcbiAgICAgIGNvdmVyYWdlOiB7XG4gICAgICAgIHByb3ZpZGVyOiAndjgnLFxuICAgICAgICBjbGVhbjogdHJ1ZSxcbiAgICAgICAgcmVwb3J0ZXI6IFsndGV4dCcsICdodG1sJywgJ2Nsb3ZlcicsICdqc29uJywgJ2NvYmVydHVyYSddXG4gICAgICB9LFxuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbSdcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgICFwcm9jZXNzLmVudi5WSVRFU1QgJiYgZW52aXJvbm1lbnRQbHVnaW4sXG4gICAgICBsb2dTZXR0aW5nc1BsdWdpbixcbiAgICAgIHRzUGF0aHMsXG4gICAgICBkdHMoKVxuICAgIF0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogcGF0aC5qb2luKF9fZGlybmFtZSwgJ2Rpc3QnKSxcbiAgICAgIGxpYjoge1xuICAgICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2luZGV4LnRzJyksXG4gICAgICAgIG5hbWU6ICdAbW9uby9zZXR0aW5ncycsXG4gICAgICAgIGZpbGVOYW1lOiAoZm9ybWF0LCBmbmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IGZvcm1hdCA9PT0gJ3VtZCcgPyAnY2pzJyA6ICdqcyc7XG4gICAgICAgICAgcmV0dXJuIGAke2ZuYW1lfS4ke2Zvcm1hdH0uJHtzdWZmaXh9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyhjb25maWdGbik7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9zaW9iYWhuc2NodWNrL0dSQVZFRkxFWC9tb25vcmVwby9uZXh0anMtdmVyY2VsL3BhY2thZ2VzL3NldHRpbmdzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc2lvYmFobnNjaHVjay9HUkFWRUZMRVgvbW9ub3JlcG8vbmV4dGpzLXZlcmNlbC9wYWNrYWdlcy9zZXR0aW5ncy9sb2dTZXR0aW5nc1BsdWdpbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc2lvYmFobnNjaHVjay9HUkFWRUZMRVgvbW9ub3JlcG8vbmV4dGpzLXZlcmNlbC9wYWNrYWdlcy9zZXR0aW5ncy9sb2dTZXR0aW5nc1BsdWdpbi50c1wiOy8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuLy8gbG9nIHNldHRpbmdzIGR1cmluZyBidWlsZFxuZnVuY3Rpb24gbG9nU2V0dGluZ3NQbHVnaW4oKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3NldHRpbmdzLWxvZycsXG4gICAgYXN5bmMgY2xvc2VCdW5kbGUoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnN0IFNFVFRJTkdTID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuICAgICAgY29uc29sZS5sb2coJ1VzaW5nIHRoZSBmb2xsb3dpbmcgc2V0dGluZ3M6Jyk7XG4gICAgICBjb25zb2xlLnRhYmxlKFNFVFRJTkdTKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ1NldHRpbmdzUGx1Z2luO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBU00sS0FFQSxTQVVP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
